const setting = {
  debug: false,
  imagePaths: [],
  loadedImageDict: [],
	emitterDataFiles: [],
	selectedEmitterDataFile: 'EmitterData.js',
	emitterDataPath: 'js',
	imagePath: 'images',
	adPath: '',
	adWidth: '',
	adHeight: ''
}

export const set = (name, val) => {
  setting[name] = val
}

export const get = (name) => {
  return setting[name]
}