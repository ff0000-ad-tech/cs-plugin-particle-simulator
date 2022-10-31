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
  const imagePath = "/images";

  // remove gifs from images
  const imagesToLoad = content.imagePaths.filter((item) => {
    return IMAGE_PATH_PATTERN.test(item);
  });
  // Generate paths for loading images
  imagesToLoad.forEach((item) => {
    const path = mergePath(imagePath, item);
    // ImageManager.add(path);
    ImageManager.addImageRequest(path);
  });

  // load images using ImageManager
  ImageManager.load(() => {
    const names = imagesToLoad.map((item) => {
      return IMAGE_PATH_PATTERN.exec(item)[1];
    });
    updateSetting({ content, adPath, loadedImageNames: names });

    // create the interface after images are loaded
    // THIS IS NOT HAPPENING
    window.Interface = new Interface();
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

// fetch API
// superagent
//   .get(
//     `/@ff0000-ad-tech/cs-plugin-particle-simulator/api/?action=getInfo&size=${adSize}`
//   )
//   .end((err, res) => {
//     if (err) {
//       alert("Error with API. Unable to proceed");
//       return;
//     }
//     alert("RESSS===", res);
//     try {
//       const data = JSON.parse(res);
//       alert("data===", data);
//       const result = JSON.parse(res.stdout);
//       alert("result===", result);
//       result.emitterDataFiles = result.emitterDataFiles.map((item) => {
//         return {
//           name: item.name,
//           content: formatEmitterData(item.content),
//         };
//       });

//       // initialize the app with the API result
//       init(result);
//     } catch (e) {
//       alert("SIM ERROR:", e);
//     }
//   });
