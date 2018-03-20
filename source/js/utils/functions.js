export const getParamInQueryString = function(name) {
	name = name.replace( /[\[]/, "\\[").replace(/[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" );
	var results = regex.exec( location.search );
	return results === null ? null : decodeURIComponent( results[ 1 ].replace(/\+/g, ' ' ));
}

export const getAdPathFromUrl = function() {
	const {origin, pathname} = window.location
	const adPath = mergePath(origin, '1-build', pathname)

	return adPath
}

export const parseAdSize = function(path) {
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

export const mergePath = function() {
	let path = ''
	const endSlash = /\/+$/g
	const startEndSlash = /^\/+|\/+$/g
	for(let i = 0; i < arguments.length; i++) {
		const item = arguments[i]
		let name = ''
		if (i === 0) {
			name = item.replace(endSlash, '')
		} else {
			name = item.replace(startEndSlash, '')
		}
		path += `${name}/`
	}

	path = path.replace(endSlash, '')
	return path
}