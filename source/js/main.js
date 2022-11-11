import "./dat.gui.custom.js";
import superagent from "superagent";
import { ImageManager } from "@ff0000-ad-tech/ad-assets";
import Interface from "./Interface";
import {
  getParamInQueryString,
  getAdPathFromUrl,
  parseAdSize,
  mergePath,
} from "./utils/functions";
import { set, get } from "./globalSetting";
import Dom from "./utils/Dom";
import axios from "axios";

const IMAGE_PATH_PATTERN = /([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/;

const adSize = getParamInQueryString("size");

function updateSetting({ content, adPath, loadedImageNames }) {
  const adSizeWH = parseAdSize(adPath);

  set("adPath", adPath);
  set("adWidth", adSizeWH.width);
  set("adHeight", adSizeWH.height);
  set("imagePaths", content.images);
  set("loadedImageNames", loadedImageNames);
  set("emitterDataFiles", content.emitterDataFiles);
}

function init(content) {
  console.log("MAIN INIT()");
  if (content.emitterDataFiles.length === 0) {
    const el = document.querySelector("#data-selector");
    el.classList.add("show-warning", "show");

    return;
  }

  const adPath = mergePath(getAdPathFromUrl(), adSize);
  // console.error(content.imagePaths);
  const imagePath = "/images";

  // remove gifs from images
  const imagesToLoad = content.imagePaths.filter((item) => {
    return IMAGE_PATH_PATTERN.test(item);
  });

  console.error(adPath);
  console.error(imagesToLoad);
  // Generate paths for loading images
  imagesToLoad.forEach((item) => {
    const path = "http://192.168.1.82:5201/" + item.substring(3);
    console.error("PATH=", path);
    // const path = mergePath(item);
    // ImageManager.add(path); // ERRORS
    ImageManager.addImageRequest(path);
  });

  console.log("SPOT0");
  window.Interface = new Interface();
  // load images using ImageManager
  ImageManager.load(() => {
    console.log("SPOT1");
    const names = imagesToLoad.map((item) => {
      console.log("ITEM", item);
      return IMAGE_PATH_PATTERN.exec(item)[1];
    });
    console.log("SPOT2");
    updateSetting({ content, adPath, loadedImageNames: names });
    console.log("SPOT3");
    // create the interface after images are loaded
    // THIS IS NOT HAPPENING
  });
}

function formatEmitterData(str) {
  const pattern = /\{(.*)\}/;
  const data = str.replace(/\r?\n|\r|\s/g, "");
  const result = pattern.exec(data);
  if (result) {
    return result[0];
  }
  return "";
}

axios
  .get(
    `/@ff0000-ad-tech/cs-plugin-particle-simulator/api/?action=getInfo&size=${adSize}`
  )
  .then(function (res) {
    // handle success
    console.log("RES:", res);
    console.log("RES DATA:", res.data);
    const result = JSON.parse(res.data.stdout);
    console.log("RES DATA OUT:", result);
    result.emitterDataFiles = result.emitterDataFiles.map((item) => {
      return {
        name: item.name,
        content: formatEmitterData(item.content),
      };
    });

    // initialize the app with the API result
    init(result);
  })
  .catch(function (error) {
    // handle error
    alert("Error with API. Unable to proceed", error);
    console.log(error);
  });
