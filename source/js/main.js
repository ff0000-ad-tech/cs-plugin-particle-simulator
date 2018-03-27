import './dat.gui.custom.js'
import superagent from 'superagent'
import {ImageManager} from 'ad-control'
import {Loader} from 'ad-load'
import Interface from './Interface'
import {getParamInQueryString, getAdPathFromUrl, parseAdSize, mergePath} from './utils/functions'
import {set, get} from './globalSetting'

const IMAGE_PATH_PATTERN = /([a-zA-Z0-9_.-]*)\.(png|jpg|jpeg)/

const adSize = getParamInQueryString('size')

// TO REMOVE: mock API contnet from Node
const FAKE_API = {
	imagePaths: [],
	emitterDataFiles: [{
		name: 'emitterData.js',
		content: ''
	}, {
		name: 'emitterData123.js',
		content: ''
	}]
}

function updateSetting({content, adPath, loadedImageNames}) {
	
	const adSizeWH = parseAdSize(adPath)

	set('adPath', adPath)
	set('adWidth', adSizeWH.width)
	set('adHeight', adSizeWH.height)
	set('imagePaths', content.images)
	set('loadedImageNames', loadedImageNames)
	set('emitterDataFiles', content.emitterDataFiles)
}

function init(content) {
	// TODO: use the real URL
	const adPath = mergePath(getAdPathFromUrl(), adSize)
	// const adPath = 'http://localhost:8000/images'
	// const imagePath = mergePath(adPath, get('imagePath'))
	const imagePath = '/images'

	// remove gifs from images
	const imagesToLoad = content.imagePaths.filter(item => {
		return IMAGE_PATH_PATTERN.test(item)
	})
	
	imagesToLoad.forEach((item) => {
		const path = mergePath(imagePath, item)
		ImageManager.addToLoad(path)
	})

	ImageManager.load(() => {
		const names = imagesToLoad.map((item) => {
			return IMAGE_PATH_PATTERN.exec(item)[1]
		})
		updateSetting({content, adPath, loadedImageNames: names})
		window.Interface = new Interface()
	})
}

// TO DO: hook up with API
superagent
	.get(`../api?action=getInfo&size=${adSize}`)
	.end((err, res) => {
		debugger
		if (err) {
			alert('Erro with API. Unable to proceed')
			return
		}

		init(JSON.parse(res.stdout))
	})




