/*
	App basic config
*/

var App = App || {};

App = {
	debug: true,
	adWidth: 300,
	adHeight: 250,
	debugSetting: {
		build_path: '300x250_new/',
		images:[],
		run_path: '../../ad-html/',
		completeBuildPath: '/Users/nico.hsieh/Documents/Clients/Nike/Nike_FA16_LunarEpic/Html/emitter_data_test/build/300x250/'
	},
	coreDependencies: [
		'js/net/load/mixin/LoaderTicker',
		'js/net/load/mixin/LoaderBase',
		'js/net/load/mixin/LoaderSource',
		'js/net/load/mixin/LoaderUtils',
		'js/net/load/single/InlineLoader',
		'js/net/load/single/DataLoader',
		'js/net/load/single/ImageLoader',
		'js/net/load/single/FontLoader',
		'js/net/load/single/FbvLoader',
		'js/net/load/Loader',
		'js/control/ImageManager',
		'js/utils/MathUtils',
		'js/utils/ObjectUtils',
		'js/events/FrameRate',
		'js/events/FrameRateBase',
		'js/geom/Vector2D',
		'js/geom/SimpleNoise2D',
		'js/view/particles/ParticlesUtils',
		'js/view/particles/Graphic',
		'js/view/particles/ParticleModel',
		'js/view/particles/Particle',
		'js/view/particles/Emitter'

	 ],
	emitterDataName: 'EmitterData',
	emitterDataSrc : '',
	fps: 60,
	interfaceSrcs: [
		'js/Dom',
		'js/dat.gui.custom',
		'js/emitterPhysicData',
		'js/styleAnimationData',
		'js/actionsData',
		'js/particleModelData',
		'js/interface'
	],
	settings: {},
	ignoredImages: [ 'images/preloader_black.gif', 'images/preloader_white.gif' ],
	imagesToLoad: [],
	imageNameArray: []
};



/*
	App functionalities
*/
App.loadSettings = function () {

	App.loadScript()
}

App.init = function () {


	//get setting from local json
	App.settings = simulator_settings;

	App.completeBuildPath = App.settings.run_path + App.settings.build_path;

	//check if use debug setting
	if( App.debug && App.getParamInQueryString( 'debugSetting' ) === 'true' ) {
		App.settings = App.debugSetting;
		App.completeBuildPath = App.debugSetting.completeBuildPath;
	}

	//check fps in query params
	var queryFps = App.getParamInQueryString( 'fps' );
	if( queryFps ) {
		App.fps = queryFps;
	}

	//check particleDataSrc in query params
	var queryEmitterDataName = App.getParamInQueryString( 'emitterDataName' );
	if( queryEmitterDataName ) {
		App.emitterDataName = queryEmitterDataName;
	}
	App.emitterDataSrc = App.completeBuildPath + 'js/' + App.emitterDataName;

	//parse ad size
	var sizeReg = /(\d+)x(\d+)/;
	if( sizeReg.test( App.settings.build_path )) {
		var result = sizeReg.exec( App.settings.build_path );

		App.adWidth = result[ 1 ];
		App.adHeight = result[ 2 ];
	}

	if( App.debug ) {
		console.log( 'App setting: ');
		console.log( App.settings );
		console.log( 'App.completeBuildPath' + App.completeBuildPath );
		console.log( 'App.adWidth: ' + App.adWidth );
		console.log( 'App.adHeight: ' + App.adHeight );
	}
	

	// images to load
	App.settings.images.forEach( function( item ) {
		if( App.ignoredImages.indexOf( item ) === -1 ) {
			App.imagesToLoad.push( item );			
		}
	});

	//load dependencies with run path
	var scripts = [];
	var scriptPromises = [];

	App.coreDependencies.forEach( function ( item ) {
		scripts.push( App.settings.run_path + '_adlib/core/' + item );
	});

	scripts.push( App.emitterDataSrc );

	App.interfaceSrcs.forEach( function ( item ) {
		scripts.push( item );
	});

	// start loading scripts
	App.loadScript( 0, scripts );

}

App.scriptPromise = function ( src ) {
	var promise = new Promise( function ( resolve, reject ) {
		var script = document.createElement( 'script' );
		script.src = src + '.js';
		script.onload = function () {
			resolve( src );
		}
		//inject script tags
		document.body.appendChild( script );
	});

	return promise;
}

App.loadScript = function ( index, arr ) {
	App.scriptPromise( arr[ index ]).then( function ( src ) {
		if( App.debug ) {
			console.log( src + '---- done!' );
		}

		App.loadNextScript( index, arr );
	});
}

App.loadNextScript = function ( index, arr ) {
	if( index < arr.length - 1 ) {
		index++;
		App.loadScript( index, arr );

	} else {
		Interface.init();
	}
}

App.getParamInQueryString = function ( name ) {
    name = name.replace( /[\[]/, "\\[").replace(/[\]]/, "\\]" );
    var regex = new RegExp( "[\\?&]" + name + "=([^&#]*)" );
    var results = regex.exec( location.search );
    return results === null ? null : decodeURIComponent( results[ 1 ].replace(/\+/g, ' ' ));
}

document.addEventListener( 'DOMContentLoaded', function () {
  App.init();
});
