import superagent from "superagent";
import { Emitter } from "ad-particles";
import { Vector2D } from "ad-geom";
import { MathUtils } from "ad-utils";
import { get } from "./globalSetting";
import getInterfaceData from "./data/index";
import Dom from "./utils/Dom";

class Interface {
  constructor() {
    this.adWidth = get("adWidth");
    this.adHeight = get("adHeight");
    this.fps = get("fps");
    this.emitterDataFiles = get("emitterDataFiles");

    this.images = get("loadedImageNames");

    this.data = getInterfaceData(this);

    if (this.emitterDataFiles.length > 1) {
      // when more than 1 emitter data file found, show the selector
      this.dataSelector = document.querySelector("#data-selector");
      this.showDataSelector(this.emitterDataFiles);
    } else {
      // when only one emitter data found, use the only one
      // the API already catches the error when there is not emitter data file found
      this.evalData(this.emitterDataFiles[0].content);
      this.selectedEmitterDataName = this.emitterDataFiles[0].name;
      this.buildInterface();
    }
  }

  buildInterface = () => {
    // build the interface
    this.createPS();

    this.guiInterfaces = [];

    //generate Emitting, Physics property interface
    this.psControl = this.generateControl(this.data.emitterPhysics);
    this.genertateInterface(this.data.emitterPhysics, this.psControl);

    //generate Style, Animation property interface
    this.styleControl = this.generateControl(this.data.styleAnimation);
    this.genertateInterface(this.data.styleAnimation, this.styleControl);

    //generate Add Model interface
    this.activeModels = [];
    var modelData = this.generateParticleModelData();
    this.modelControl = this.generateControl(modelData);
    this.modelGui = this.genertateInterface(modelData, this.modelControl);

    //generate Action interface
    this.actionControl = this.generateControl(this.data.actions);
    this.genertateInterface(this.data.actions, this.actionControl);

    //get the elements to use later
    this.interfaceContainer = document.querySelectorAll(".ac")[0];
    this.blockGuide = document.querySelector("#block-guide");
    this.codeDisplay = document.querySelector("#code-display");
    this.codeDisplayText = document.querySelector("#code-display-text");
    this.codeClose = document.querySelector("#code-close");
    this.saveFile = document.querySelector("#save");

    this.velGuide = document.querySelector("#velocity-guide");
    this.velGuideCtx = this.velGuide.getContext("2d");

    this.forceGuide = document.querySelector("#force-guide");
    this.forceGuideCtx = this.forceGuide.getContext("2d");

    //create, style, add events to additional UI elements
    Dom.setGroupStyle([this.velGuide, this.forceGuide], {
      left: this.adWidth / 2 - 60 + "px",
      top: this.adHeight / 2 - 60 + "px"
    });

    this.saveFile.addEventListener("click", this.writeCode, false);

    this.codeClose.addEventListener(
      "click",
      () => {
        this.codeDisplay.classList.remove("show", "show-message");
      },
      false
    );

    this.createMoveBtn();
    this.createHelpBtn();
  };

  /*
		Additional UI elements
	*/

  createMoveBtn = () => {
    this.interfaceOffset = new Vector2D(0, 0);
    this.moveBtn = document.createElement("div");
    this.moveBtn.id = "move-btn";
    this.interfaceContainer.appendChild(this.moveBtn);

    this.moveBtn.addEventListener("mousedown", evt => {
      this.dragging = true;
      this.draggingStart = new Vector2D(evt.clientX, evt.clientY);
    });

    document.body.addEventListener("mousemove", evt => {
      if (!this.dragging) {
        return;
      }
      this.draggingOffset = new Vector2D(evt.clientX, evt.clientY).sub(this.draggingStart);
      this.interfaceOffset.add(this.draggingOffset);

      var top = this.interfaceOffset.y + "px";
      var right = this.interfaceOffset.x * -1 + "px";

      this.interfaceContainer.style.top = top;
      this.interfaceContainer.style.right = right;

      this.draggingStart = new Vector2D(evt.clientX, evt.clientY);
    });

    document.body.addEventListener("mouseup", evt => {
      this.dragging = false;
    });
  };

  createHelpBtn = () => {
    var helpBtn = document.createElement("a");
    helpBtn.id = "help-btn";
    helpBtn.href = "https://confluence.ff0000.com/display/AT/PARTICLES";
    helpBtn.target = "_blank";

    this.interfaceContainer.appendChild(helpBtn);
  };

  /*
		Emitter	
	*/

  createPS = () => {
    //canvas element
    this.canvasEl = document.querySelector("#canvas-el");
    this.canvasEl.style.width = this.adWidth + "px";
    this.canvasEl.style.height = this.adHeight + "px";
    this.canvasEl.width = this.adWidth;
    this.canvasEl.height = this.adHeight;

    //particle system instance
    var setting = {
      emitterData: window.selectedEmitterData,
      fps: this.fps
    };
    this.PS = new Emitter();
    this.PS.init(this.canvasEl, setting);
    this.PS.emit();
  };

  getPSProp = (key, type) => {
    if (type === "action") {
      return this.PS[key] || null;
    }
    var val = this.PS.get(key);
    return val === undefined ? null : val;
  };

  /*
		Actions	
	*/

  publishCode = () => {
    var data = this.PS.properties;
    var tab = "&nbsp;&nbsp;";
    var str = "export default ";
    str += JSON.stringify(data, null, 2);

    this.codeDisplayText.value = str;
    this.codeDisplay.classList.add("show");
  };

  writeCode = () => {
    const data = `export default ${JSON.stringify(this.PS.properties, null, 2)}`;
    const size = `${get("adWidth")}x${get("adHeight")}`;
    superagent
      .post(`/cs-plugin-particle-simulator/api/`)
      .send({
        action: "writeData",
        size,
        data,
        fileName: this.selectedEmitterDataName
      })
      .end((err, res) => {
        if (err) {
          alert("Erro with API. Unable to save the fil");
          return;
        }

        const data = JSON.parse(res.text);
        const msgEl = document.querySelector("#saved-message");
        msgEl.innerHTML = data.stdout;
        this.codeDisplay.classList.add("show-message");
      });
  };

  showDataSelector = (opts = []) => {
    // construct the options
    var el = document.querySelector("#data-options");
    opts.forEach((item, index) => {
      var li = document.createElement("li");
      li.innerHTML = item.name;
      li.classList.add("btn");
      el.appendChild(li);
      li.addEventListener("click", () => {
        this.selectData(index);
      });
    });
    this.dataSelector.classList.add("show");
  };

  selectData = index => {
    // set the emitter data under global scope
    const data = this.emitterDataFiles[index];
    this.selectedEmitterDataName = data.name;
    this.evalData(data.content);
    this.buildInterface();
    this.dataSelector.classList.remove("show");
  };

  evalData = data => {
    try {
      eval(`window.selectedEmitterData=${data}`);
    } catch (e) {
      alert(`${e}\nPlease check your data file`);
    }
  };
  addParticleModel = () => {
    var self = this;
    var name = "model" + this.modelIndex;
    var obj = {
      name: name,
      type: "folder",
      children: this.data.getDefaultNewParticleModelData(name)
    };

    this.activeModels.push(name);
    this.modelIndex++;

    obj.children.forEach(function(item) {
      if (typeof item.defaultVal == "object") {
        item.defaultVal = JSON.stringify(item.defaultVal, null, 1);
      }
      self.modelControl[item.name] = item.defaultVal;
    });

    this.processData(this.modelControl, this.modelGui, obj);
    this.updateEmitterModels();
  };

  deleteParticleModel = name => {
    //TODO: remove it from dat gui
    var el = document.querySelector("#" + name);
    el.parentNode.removeChild(el);

    var i;
    for (i = 0; i < this.activeModels.length; i++) {
      if (this.activeModels[i] === name) {
        this.activeModels.splice(i, 1);
        break;
      }
    }

    this.updateEmitterModels();
  };

  /*
		Generating controls
	*/

  generateControl = data => {
    var result = {};
    var i;
    for (i = 0; i < data.length; i++) {
      var obj = data[i];
      if (obj.type === "folder") {
        var k;
        for (k = 0; k < obj.children.length; k++) {
          var child = obj.children[k];
          var val = this.syncWithCurrentData(child);
          result[child.name] = val === null ? child.defaultVal : val;
          if (obj.type === "action") {
            result[obj.name] = result[obj.name].bind(this.PS);
          }
        }
      } else {
        var val = this.syncWithCurrentData(obj);
        result[obj.name] = val === null ? obj.defaultVal : val;
        if (obj.type === "action") {
          result[obj.name] = result[obj.name].bind(this.PS);
        }
      }
    }
    return result;
  };

  generateParticleModelData = () => {
    const _this = this;
    this.modelIndex = 0;
    //check the present model
    var data = this.data.particleModel;
    var models = this.getPSProp("particleModels");
    var i;
    for (i = 0; i < models.length; i++) {
      var name = "model" + this.modelIndex;
      var m = models[i];

      var obj = {
        name: name,
        type: "folder",
        children: this.data.getDefaultNewParticleModelData(name)
      };

      obj.children.forEach(function(item) {
        //use existing value if availabe
        if (m[item.modelKey]) {
          item.defaultVal = m[item.modelKey];
        }
        //stringfy the object
        if (typeof item.defaultVal == "object") {
          item.defaultVal = JSON.stringify(item.defaultVal, null, 1);
        }
        //this can be organized better~~
        if (item.name.indexOf("Delete") > -1) {
          item.defaultVal = (function(n) {
            return () => {
              _this.deleteParticleModel(n);
            };
          })(name);
        }
      });

      data.push(obj);
      this.activeModels.push(name);
      this.modelIndex++;
    }
    return data;
  };

  genertateInterface = function(data, target) {
    var gui = new dat.GUI();
    var i;
    for (i = 0; i < data.length; i++) {
      var obj = data[i];
      this.processData(target, gui, obj);
    }

    return gui;
  };

  processData = (control, targetGui, obj, parentObj = {}) => {
    var singleController;

    switch (obj.type) {
      case "text":
      case "boolean":
      case "action":
        if (obj.type === "text") {
          if (typeof obj.defaultVal === "object") {
            obj.defaultVal = JSON.stringify(obj.defaultVal, null, 1);
          }
        }
        singleController = targetGui.add(control, obj.name);
        if (obj.min !== undefined) {
          singleController.min(obj.min);
        }
        singleController.onFinishChange(val => {
          window.Interface.setEmitterProperty(obj, val, parentObj);
          if (parentObj.name === "world") {
            this.hideGuide(true);
          }
        });
        break;

      case "color":
        singleController = targetGui.addColor(control, obj.name);
        singleController.onChange(val => {
          window.Interface.setEmitterProperty(obj, val, parentObj);
        });
        break;

      case "slider":
        singleController = targetGui.add(control, obj.name, obj.range[0], obj.range[1]);
        if (obj.step !== undefined) {
          singleController.step(obj.step);
        }
        singleController.onChange(val => {
          window.Interface.setEmitterProperty(obj, val, parentObj);
        });
        singleController.onFinishChange(val => {
          switch (parentObj.name) {
            case "world":
            case "origin":
              this.hideGuide();
              break;
            case "velocityAngle":
              this.hideVelocityGuide();
              break;
            case "globalForce":
              this.hideForceGuide();
              break;
          }
        });

        break;

      case "dropdown":
        singleController = targetGui.add(control, obj.name, obj.options);
        singleController.onFinishChange(val => {
          window.Interface.setEmitterProperty(obj, val, parentObj);
          if (parentObj.name === "origin") {
            this.hideGuide(true);
          }
        });
        break;

      case "folder":
        var f = targetGui.addFolder(obj.name);
        var k;
        for (k = 0; k < obj.children.length; k++) {
          this.processData(control, f, obj.children[k], obj);
        }
        break;
    }
  };

  /*
		Update Emitter when values change
	*/

  setEmitterProperty = (obj, val, parentObj) => {
    if (obj.type === "action") {
      return;
    }
    parentObj = parentObj || {};
    var key = obj.map || obj.name;
    var p = this.psControl;
    //show guides for world and origin
    switch (parentObj.name) {
      case "world":
        if (!(obj.name === "worldActive" && !val)) {
          this.showGuide(p.left, p.top, p.right - p.left, p.bottom - p.top);
        }
        break;

      case "origin":
        var rx = p.originXRange / 2;
        var ry = p.originYRange / 2;
        var ox = p.originX - rx;
        var oy = p.originY - ry;
        this.showGuide(ox, oy, p.originX + rx - ox, p.originY + ry - oy, p.originShape);
        break;

      case "velocityAngle":
        var r = p.angleRange / 2;
        this.showVelocityGuide(p.angleValue - r, p.angleValue + r);
        break;

      case "globalForce":
        this.showForceGuide(p.forceAngle);
        break;
    }
    //array string

    if (typeof val === "string") {
      var str = val.replace(/\s+/g, "");
      if (str[0] === "[" && str[str.length - 1] === "]") {
        str = str.substr(1);
        str = str.slice(0, str.length - 1);
        var arr = str.split(",{");
        var result = [];
        var i;
        for (i = 0; i < arr.length; i++) {
          var item = arr[i];
          if (i !== 0) {
            item = "{" + item;
          }
          if (item.trim().length !== 0) {
            try {
              result.push(JSON.parse(item));
            } catch (e) {
              alert("This is not a valid input.");
              return;
            }
          }
        }
        val = result;
      }
    }

    var str = parentObj.name || "";
    if (str.indexOf("model") === 0) {
      this.updateEmitterModels();
    } else {
      this.PS.set(key, val);
    }
  };

  updateEmitterModels() {
    var models = [];
    var mc = this.modelControl;
    var i;
    for (i = 0; i < this.activeModels.length; i++) {
      var name = this.activeModels[i];
      var obj = {};
      obj.type = mc[name + "Type"];
      obj.id = mc[name + "Id"];
      obj.width = mc[name + "Width"];

      if (obj.type === "Image") {
        obj.image = mc[name + "ImageName"];
      }

      if (obj.type === "Sprite") {
        obj.image = mc[name + "ImageName"];
        obj.spriteSetting = JSON.parse(mc[name + "SpriteSetting"]);
      }

      if (obj.type === "Rect") {
        obj.height = mc[name + "Height"];
      }

      obj.probability = mc[name + "Probability"];
      obj.properties = JSON.parse(mc[name + "Props"]);

      models.push(obj);
    }
    this.PS.set("particleModels", models);
  }

  /*
		Initial Sync with Emitter
	*/

  syncWithCurrentData = obj => {
    var key = obj.map || obj.name;
    var val = null;

    switch (obj.name) {
      case "bgImage":
        val = this.getPSProp("background.image") || this.images[0] || "";
        this.PS.set("background.image", val);
        break;

      default:
        val = this.getPSProp(key, obj.type);
    }

    if (typeof val === "object" && val !== null) {
      var str = "[\n";
      var i;
      for (i = 0; i < val.length; i++) {
        str += " ";
        str += JSON.stringify(val[i]);
        if (i < val.length - 1) {
          str += ", ";
          str += "\n";
        }
      }
      str += "\n]";
      val = str;
    }

    if (val === undefined) {
      val = null;
    }

    return val;
  };

  /*
		Guide Hints
	*/

  showGuide = (x, y, w, h, shape) => {
    var style = {
      left: x + "px",
      top: y + "px",
      width: w + "px",
      height: h + "px"
    };
    Dom.setStyle(this.blockGuide, style);
    Dom.addClass(this.blockGuide, "show");
    if (shape === "oval") {
      Dom.addClass(this.blockGuide, "oval");
    }
  };

  hideGuide(delay) {
    var delayTime = delay ? 500 : 0;
    setTimeout(() => {
      Dom.removeClass(this.blockGuide, "show");
      Dom.removeClass(this.blockGuide, "oval");
    }, delayTime);
  }

  showVelocityGuide(startAngle, endAngle) {
    Dom.addClass(this.velGuide, "show");
    var ctx = this.velGuideCtx;
    var center = new Vector2D(60, 60);
    var dir1 = Vector2D.degreeToVector(startAngle);
    var dir2 = Vector2D.degreeToVector(endAngle);
    ctx.clearRect(0, 0, 120, 120);

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, 60, 0, Math.PI * 2);
    ctx.lineTo(center.x, center.y);
    ctx.fillStyle = "rgba( 255, 255, 255, .4 )";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.arc(center.x, center.y, 58, MathUtils.toRadians(startAngle), MathUtils.toRadians(endAngle));
    ctx.lineTo(center.x, center.y);
    ctx.strokeStyle = "rgba( 0, 0, 0, .5 )";
    ctx.fillStyle = "rgba( 0, 200, 255, .4 )";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  showForceGuide(angle) {
    Dom.addClass(this.forceGuide, "show");
    var radius = 60;
    var ctx = this.forceGuideCtx;
    var center = new Vector2D(radius, radius);
    var dir = Vector2D.degreeToVector(angle);
    dir.mult(radius);
    dir.add(center);

    ctx.clearRect(0, 0, radius * 2, radius * 2);

    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba( 0, 0, 0, 0)";
    ctx.fillStyle = "rgba( 255, 255, 255, 0.3 )";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(center.x, center.y, 5, 0, Math.PI * 2);
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(dir.x, dir.y);
    ctx.strokeStyle = "rgba( 0, 0, 0, 1 )";
    ctx.fillStyle = "rgba( 255, 255, 255, .4 )";
    ctx.lineWidth = 2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  hideVelocityGuide() {
    Dom.removeClass(this.velGuide, "show");
  }

  hideForceGuide() {
    Dom.removeClass(this.forceGuide, "show");
  }
}

export default Interface;
