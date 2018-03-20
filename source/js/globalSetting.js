const setting = {
  debug: false,
	imagePaths: ['img1.jpg', 'img2.png', 'img3.gif'],
  loadedImageDict: [],
	emitterDataFiles: [],
	emitterDataPath: 'js',
	imagePath: 'images',
	adPath: '',
	adWidth: '',
	adHeight: '',
	fps: 60
}

export const set = (name, val) => {
  setting[name] = val
}

export const get = (name) => {
  return setting[name]
}
