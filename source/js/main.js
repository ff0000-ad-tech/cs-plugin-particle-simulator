import './dat.gui.custom.js'
import superagent from 'superagent'
import {ImageManager} from 'ad-control'
import {Loader} from 'ad-load'
import Interface from './Interface'
import {getParamInQueryString, getAdPathFromUrl, parseAdSize, mergePath} from './utils/functions'
import {set, get} from './globalSetting'

const IMAGE_PATH_PATTERN = /([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/

// TO REMOVE: mock API contnet from Node
const FAKE_API = {
	imagePaths: ['img1.jpg', 'img2.png', 'img3.gif'],
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

function init(content) {
	// TODO: use the real URL
	const adPath = getAdPathFromUrl() + '300x250/'
	// const adPath = 'http://localhost:8000/images'
	// const imagePath = mergePath(adPath, get('imagePath'))
	const imagePath = 'http://localhost:8000/images'

	// remove gifs from images
	const imagesToLoad = content.imagePaths.filter(item => {
		return IMAGE_PATH_PATTERN.test(item)
	})
	
	imagesToLoad.forEach((item) => {
		const path = mergePath(imagePath, item)
		ImageManager.addToLoad(path)
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



