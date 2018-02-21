// Utils
export const getParamInQueryString = function(name) {
	name = name.replace( /[\[]/, "\\[").replace(/[\]]/, "\\]" );
	var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" );
	var results = regex.exec( location.search );
	return results === null ? null : decodeURIComponent( results[ 1 ].replace(/\+/g, ' ' ));
}

export const getAdPathFromUrl = function() {
	const path = window.location.pathname
	const pattern = /^\/ps\/([a-zA-Z0-9_.-]*)\//
	if (pattern.test(path)) {
		const result = pattern.exec(path)
		return result[1]
	}

	return null
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
	for(let i = 0; i < arguments.length; i++) {
		const item = arguments[i]
		let name = ''
		if (i === 0) {
			name = item.replace(/\/+$/g, '')
		} else {
			name = item.replace(/^\/+|\/+$/g, '')
		}
		path += `${name}/`
	}
	return path
}