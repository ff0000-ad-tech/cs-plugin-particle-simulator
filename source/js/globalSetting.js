const setting = {
  debug: false,
  imagePaths: [],
  loadedImages: [],
	emitterDataFiles: [],
	selectedEmitterDataFile: 'EmitterData.js',
	emitterDataPath: 'js',
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