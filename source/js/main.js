import './dat.gui.custom.js'
import superagent from 'superagent'
import {ImageManager} from 'ad-control'
import {Loader} from 'ad-load'
import Interface from './Interface'
import {getParamInQueryString, getAdPathFromUrl, parseAdSize, mergePath} from './utils/functions'
import {preloadImages} from './utils/preload'
import {set, get} from './globalSetting'

const IMAGE_PATH_PATTERN = /\/([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/

class Hello {

}

// TO REMOVE: mock API contnet from Node
const FAKE_API = {
	imagePaths: [],
	emitterDataFiles: ['emitterData.js']
}

function updateSetting({content, adPath, loadedImageDict}) {
	
	const adSize = parseAdSize(adPath)

	set('adPath', adPath)
	set('adWidth', adSize.width)
	set('adHeight', adSize.height)
	set('imagePaths', content.images)
	set('loadedImageDict', loadedImageDict)
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
	// TO DO: use the real URL
	const adPath = getAdPathFromUrl() + '300x250/'
	const imagePath = mergePath(adPath, get('imagePath'))


	// remove gifs from images
	const imagesToLoad = content.imagePaths.filter(item => {
		return IMAGE_PATH_PATTERN.test(item)
	})
	
	imagesToLoad.forEach((item) => {
		const path = mergePath(imagePath, item)
		ImageManager.addToLoad(adPath)
	})

	ImageManager.load(() => {
		updateSetting({content, adPath, loadedImageDict: ImageManager._dict})
		window.Interface = new Interface()
	})
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



