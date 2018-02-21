/*
	App basic config
*/

import './dat.gui.custoom'
import superagent from 'superagent'
import Interface from './Interface'
import {getParamInQueryString, getAdPathFromUrl, parseAdSize, mergePath} from './utils/functions'
import {preloadImages} from './utils/preload'
import {set, get} from './globalSetting'

const IMAGE_PATH_PATTERN = /\/([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/

// TO REMOVE: mock API contnet from Node
const FAKE_API = {
	imagePaths: [],
	emitterDataFiles: ['emitterData.js']
}

function updateSetting(content, imageObj) {
	const adPath = getAdPathFromUrl()
	const adSize = parseAdSize(setting)

	set('adPath', adPath)
	set('adWidth', adSize[0])
	set('adHeight', adSize[1])
	set('imagePaths', content.images)
	set('loadedImages', imageObj)
	set('emitterDataFiles', content.emitterDataFiles)
}

function shortenImageObjectKeys(imageObj) {
	const pattern = /\/([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/
	const shortenObj = {}
	Object.keys(imageObj).forEach((name) => {
		const result = IMAGE_PATH_PATTERN.exec(name)
		shortenObj[result[1]] = imageObj[name]
	})

	return shortenObj
}

function init(content) {
	// remove gifs from images to
	const imagesToLoad = content.imagePaths.filter(item => {
		return IMAGE_PATH_PATTERN.test(item)
	})
	preloadImages({
		images: imagesToLoad
	}).then((imageObj) => {
		const cleanedUpImgObj = shortenImageObjectKeys(imageObj)
		updateSetting(content, cleanedUpImgObj)
	})
	Interface.init()
}

// TO DO: hook up with API
// superagent
// 	.get('url')
// 	.end((err, res) => {
// 		if (err) {
// 			alert('Erro with API. Unable to proceed')
// 			return
// 		}

// 		init(res.body)
// 	})

// TO REMOVE: after API is done
init(FAKE_API)



