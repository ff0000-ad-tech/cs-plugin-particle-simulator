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

async function init(content) {
  if (content.emitterDataFiles.length === 0) {
    const el = document.querySelector("#data-selector");
    el.classList.add("show-warning", "show");

    return;
  }

  const adPath = "http://192.168.1.82:5200/1-build/" + adSize; //mergePath(getAdPathFromUrl(), adSize);
  // console.error(content.imagePaths);
  const imagePath = "/images";

  // remove gifs from images
  const imagesToLoad = content.imagePaths.filter((item) => {
    const yap = IMAGE_PATH_PATTERN.test(item);
    return yap;
  });

  // Generate paths for loading images
  imagesToLoad.forEach((item) => {
    const path = "http://192.168.1.82:5200/" + item.substring(3);
    // const path = mergePath(item);
    // ImageManager.add(path); // ERRORS
    const imgId = ImageManager.addImageRequest({ src: item });
  });

  // load images using ImageManager
  const loaded = await ImageManager.load();
  const names = imagesToLoad.map((item) => {
    const pp = IMAGE_PATH_PATTERN.exec(item)[1];
    return pp;
  });
  updateSetting({ content, adPath, loadedImageNames: names });
  if (loaded) {
    window.Interface = new Interface();
  }
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
