const setting = {
  debug: false,
	imagePaths: ['img1.jpg', 'img2.png', 'img3.gif'],
  loadedImageNames: [],
	emitterDataFiles: [],
	emitterDataPath: 'js',
	imagePath: 'images',
	adPath: '',
	adWidth: '',
	adHeight: '',
	fps: 60
}

export const set = (name, val) => {
	if (name in setting) {
		setting[name] = val
	} else {
		console.error(`Can't set an undefined key in setting: ${name}`)
	}
}

export const get = (name) => {
  return setting[name]
}
