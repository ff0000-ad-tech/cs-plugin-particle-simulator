/*
	App basic config
*/

import './dat.gui.custoom'
import Interface from './Interface'


// import all the deps
// import dynamic emitter data (import should work in Chrome...)
// import AdApp generated config for build path
// load fba pay load 
// redistribute images
// init interface

// use the 
const defaultSetting = {
	debuge: false,
	fps: 60,
	emitterDataName: 'EmitterData',
	emitterDataPath: 'EmitterData.js',
	adWidth: 300,
	adHeight: 250
}

// Utils
const getParamInQueryString = function(name) {
	name = name.replace( /[\[]/, "\\[").replace(/[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" );
	var results = regex.exec( location.search );
	return results === null ? null : decodeURIComponent( results[ 1 ].replace(/\+/g, ' ' ));
}

const parseAdSize = function(path) {
	var sizeReg = /(\d+)x(\d+)/;
	if (sizeReg.test(path)) {
		var result = sizeReg.exec(path);

		return {
			width: result[1],
			height: result[2]
		}
	}

	return null
}

const getConfig = function({build_path}) {
	const customObj = {}
	const queryKeys = ['debug', 'fps', 'emitterDataName']
	const size = parseAdSize(build_path)

	queryKeys.forEach((key) => {
		const val = getParamInQueryString(key)
		if (val !== null) {
			customObj[key] = val
		}
	})

	if (size !== null) {
		customObj.adWidth = size.width
		customObj.adWidth = size.height
	}

	const result = Object.assign(defaultSetting, customObj)

	return result
}

const config = getConfig(setting)



// Interface.init();
// export default 




