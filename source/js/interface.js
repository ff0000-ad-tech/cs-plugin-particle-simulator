var Interface = new function () {

	var parent = this;

	this.init = function () {

		//preload from image array

		if( App.imagesToLoad.length !== 0 ) {
			ImageManager.addLoader( new Loader( 
				App.imagesToLoad, { 
					name: 'indexImages', 
					prepend: App.completeBuildPath
			}));


			ImageManager.load( function () {
				parent.buildInterface();
			});

			var i;
			for( i=0; i<App.imagesToLoad.length; i++ ) {
				var img = App.imagesToLoad[ i ];
				var name = img.substring( img.lastIndexOf('/') + 1, img.lastIndexOf('.'));
				App.imageNameArray.push( name );
			}

		} else {
			this.buildInterface();
		}
	}

	this.buildInterface = function () {
		this.createPS();

		this.guiInterfaces = [];

		//generate Emitting, Physics property interface
		this.psControl = new this.generateControl( InterfaceData.emitterPhysics );
		this.genertateInterface( InterfaceData.emitterPhysics, this.psControl );

		//generate Style, Animation property interface
		this.styleControl = new this.generateControl( InterfaceData.styleAnimation );
		this.genertateInterface( InterfaceData.styleAnimation, this.styleControl );

		//generate Add Model interface
		this.activeModels = [];
		var modelData = this.generateParticleModelData();
		this.modelControl = new this.generateControl( modelData );
		this.modelGui = this.genertateInterface( modelData, this.modelControl );

		//generate Action interface
		this.actionControl = new this.generateControl( InterfaceData.actions );
		this.genertateInterface( InterfaceData.actions, this.actionControl );

		//get the elements to use later
		this.interfaceContainer = Dom.getBy( '.ac' )[ 0 ];
		this.blockGuide = Dom.getBy( '#block-guide' );
		this.codeDisplay = Dom.getBy( '#code-display' );
		this.codeDisplayText = Dom.getBy( '#code-display-text' );
		this.codeClose = Dom.getBy( '#code-close' );

		this.velGuide = Dom.getBy( '#velocity-guide' );
		this.velGuideCtx = this.velGuide.getContext( '2d' );

		this.forceGuide = Dom.getBy( '#force-guide' );
		this.forceGuideCtx = this.forceGuide.getContext( '2d' );

		//create, style, add events to additional UI elements
		Dom.setGroupStyle([ this.velGuide, this.forceGuide ], {
			left: App.adWidth / 2 - 60 + 'px',
			top: App.adHeight / 2 - 60 + 'px'
		});

		this.codeClose.addEventListener( 'click', function () {
			parent.codeDisplay.style.display = 'none';
		}, false );

		this.createMoveBtn();
		this.createHelpBtn();
	}

	/*
		Additional UI elements
	*/

	this.createMoveBtn = function () {

		this.interfaceOffset = new Vector2D( 0, 0 );
		this.moveBtn = document.createElement( 'div' );
		this.moveBtn.id = 'move-btn';
		this.interfaceContainer.appendChild( this.moveBtn );

		this.moveBtn.addEventListener( 'mousedown', function ( evt ) {
			parent.dragging = true;
			parent.draggingStart = new Vector2D( evt.clientX, evt.clientY );
		});

		document.body.addEventListener( 'mousemove', function ( evt ) {
			if( !parent.dragging ) { return; }
			parent.draggingOffset = new Vector2D( evt.clientX, evt.clientY ).sub( parent.draggingStart );
			parent.interfaceOffset.add( parent.draggingOffset );

			var top =  parent.interfaceOffset.y + 'px';
			var right = parent.interfaceOffset.x * -1 + 'px';
			
			parent.interfaceContainer.style.top = top;
			parent.interfaceContainer.style.right = right;

			parent.draggingStart = new Vector2D( evt.clientX, evt.clientY );
		});

		document.body.addEventListener( 'mouseup', function ( evt ) {
			parent.dragging = false;
		});
	}

	this.createHelpBtn = function () {
		var helpBtn = document.createElement( 'a' );
		helpBtn.id = 'help-btn';
		helpBtn.href = 'https://confluence.ff0000.com/display/AT/PARTICLES';
		helpBtn.target = '_blank';

		this.interfaceContainer.appendChild( helpBtn );
	}

	/*
		Emitter	
	*/

	this.createPS = function () {
		//canvas element
		this.canvasEl =  Dom.getBy( '#canvas-el' );
		this.canvasEl.style.width = App.adWidth + 'px';
		this.canvasEl.style.height = App.adHeight + 'px';
		this.canvasEl.width = App.adWidth;
		this.canvasEl.height = App.adHeight;

		//particle system instance
		var setting = {
			emitterData: window[ App.emitterDataName ],
			fps: App.fps
		};
		this.PS = new Emitter();
		this.PS.init( this.canvasEl, setting );
		this.PS.emit();
	}

	this.getPSProp = function ( key, type ) {

		if ( type === 'action' ) {
			return parent.PS[ key ] || null;
		}
		var val = parent.PS.get( key );
		return val === undefined ? null : val;
	}

	/*
		Actions	
	*/

	this.getCode = function () {
		var data = parent.PS.properties;
		var tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
		var str = 'var ' + App.emitterDataName + '= ';
		str += JSON.stringify( data, null, 4 );
		str += ';';

		parent.codeDisplayText.value = str;
		parent.codeDisplay.style.display = 'block';
	}

	this.addParticleModel = function () {
		var name = 'model' + parent.modelIndex;
		var obj = {
				name: name,
				type: 'folder',
				children: InterfaceData.getDefaultNewParticleModelData( name )
			};

		parent.activeModels.push( name );
		parent.modelIndex++;

		obj.children.forEach( function( item ){
			if( typeof item.defaultVal == 'object' ) {
				item.defaultVal = JSON.stringify( item.defaultVal, null, 1 );
			}
			parent.modelControl[ item.name ] = item.defaultVal;
		});
			
		parent.processData( parent.modelControl, parent.modelGui, obj );
		parent.updateEmitterModels();
	}

	this.deleteParticleModel = function ( name ) {
		//TODO: remove it from dat gui
		var el = Dom.getBy( '#' + name );
		el.parentNode.removeChild( el );

		var i;
		for( i=0; i<this.activeModels.length; i++ ) {
			if( this.activeModels[ i ] === name ) {
				this.activeModels.splice( i, 1 );
				break;
			}
		}

		this.updateEmitterModels();
	}

	/*
		Generating controls
	*/

	this.generateControl = function ( data ) {
		var i;
		for( i=0; i<data.length; i++ ) {
			var obj = data[ i ];
			if( obj.type === 'folder' ) {
				var k;
				for( k=0; k<obj.children.length; k++ ) {
					var child = obj.children[ k ];
					var val = parent.syncWithCurrentData( child );
					this[ child.name ] = val === null ? child.defaultVal : val;
					if( obj.type === 'action' ) {
						this[ obj.name ] = this[ obj.name ].bind( parent.PS );
					}
				}

			} else {

				var val = parent.syncWithCurrentData( obj );
				this[ obj.name ] = val === null ? obj.defaultVal : val;
				if( obj.type === 'action' ) {
					this[ obj.name ] = this[ obj.name ].bind( parent.PS );
				}
			}
		}
	}

	this.generateParticleModelData = function () {
		this.modelIndex = 0;
		//check the present model
		var data = InterfaceData.particleModel;
		var models = this.getPSProp( 'particleModels' );
		var i;
		for( i=0; i<models.length; i++ ) {
			var name = 'model' + this.modelIndex;
			var m = models[ i ];

			var obj = {
				name: name,
				type: 'folder',
				children: InterfaceData.getDefaultNewParticleModelData( name )
			};
			
			obj.children.forEach( function( item ) {
				//use existing value if availabe
				if( m[ item.modelKey ]) {
					item.defaultVal = m[ item.modelKey ];
				}
				//stringfy the object
				if( typeof item.defaultVal == 'object' ) {
					item.defaultVal = JSON.stringify( item.defaultVal, null, 1 );
				}
				//this can be organized better~~
				if ( item.name.indexOf( 'Delete' ) > -1 ) {
					item.defaultVal = (function (n) {
						return function () {
							parent.deleteParticleModel( n );
						}
					})( name );
				}
			});

			data.push( obj );
			this.activeModels.push( name );
			this.modelIndex++;
		}
		return data;
	}

	this.genertateInterface = function ( data, target ) {
		var gui = new dat.GUI();
		var i;
		for( i=0; i<data.length; i++ ) {
			var obj = data[ i ];
			this.processData( target, gui, obj );
		}

		return gui;
	}


	this.processData = function ( control, targetGui, obj, parentObj ) {

		parentObj = parentObj || {};
		var _this = this;
		var singleController;

		switch( obj.type ) {

			case 'text':
			case 'boolean':
			case 'action':
				if( obj.type === 'text' ) {
					if( typeof obj.defaultVal === 'object' ) {
						obj.defaultVal = JSON.stringify( obj.defaultVal, null, 1 );
					}
				}
				singleController = targetGui.add( control, obj.name );
				if( obj.min !== undefined ) {
					singleController.min( obj.min );
				}
				singleController.onFinishChange( function ( val ) {
					_this.setEmitterProperty( obj, val, parentObj );
					if( parentObj.name === 'world' ) {
						_this.hideGuide( true );
					}
				});
			break;

			case 'color':
				singleController = targetGui.addColor( control, obj.name );
				singleController.onChange( function ( val ) {
					_this.setEmitterProperty( obj, val, parentObj );
				});
			break;

			case 'slider':
				singleController = targetGui.add( control, obj.name, obj.range[ 0 ], obj.range[ 1 ] );
				if( obj.step !== undefined ) {
					singleController.step( obj.step );
				}
				singleController.onChange( function ( val ) {
					_this.setEmitterProperty( obj, val, parentObj );
				});
				singleController.onFinishChange( function ( val ) {
					switch( parentObj.name ) {
						case 'world':
						case 'origin':
								_this.hideGuide();
						break;
						case 'velocityAngle':
							_this.hideVelocityGuide();
						break;
						case 'globalForce':
								_this.hideForceGuide();
						break;
					}
				});
				

			break;

			case 'dropdown':
				singleController = targetGui.add( control, obj.name, obj.options );
				singleController.onFinishChange( function ( val ) {
					_this.setEmitterProperty( obj, val, parentObj );
					if( parentObj.name === 'origin' ) {
						_this.hideGuide( true );
					}
				});
			break;

			case 'folder':
				var f = targetGui.addFolder( obj.name );
				var k;
				for( k=0; k<obj.children.length; k++ ) {
					this.processData( control, f, obj.children[ k ], obj );
				}
			break;
		}
	}

	/*
		Update Emitter when values change
	*/

	this.setEmitterProperty = function ( obj, val, parentObj ) {
		if( obj.type === 'action' ) { return; }
		parentObj = parentObj || {};
		var key = obj.map || obj.name;
		var p = this.psControl;
		//show guides for world and origin
		switch( parentObj.name ) {

			case 'world':
				if( !( obj.name === 'worldActive' && !val )) {
					this.showGuide( p.left, p.top, p.right - p.left, p.bottom - p.top );
				}
			break;

			case 'origin':
				var rx = p.originXRange / 2;
				var ry = p.originYRange / 2;
				var ox = p.originX - rx;
				var oy = p.originY - ry;
				this.showGuide( ox, oy, p.originX + rx - ox, p.originY + ry - oy, p.originShape );
			break;

			case 'velocityAngle':
				var r = p.angleRange / 2;
				this.showVelocityGuide( p.angleValue - r, p.angleValue + r );
			break;

			case 'globalForce':
				this.showForceGuide( p.forceAngle );
			break;
		}
		//array string

		if( typeof val === 'string' ) {
			var str = val.replace(/\s+/g, '');
			if( str[ 0] === '[' && str[ str.length - 1 ] === ']' ) {
				str = str.substr( 1 );
				str = str.slice( 0, str.length - 1 );
				var arr = str.split(',{');
				var result = [];
				var i;
				for( i=0; i<arr.length; i++ ) {
					var item = arr[ i ];
					if( i !== 0 ) {
						item = '{' + item;
					}
					if( item.trim().length !== 0 ) {
						try {
							result.push( JSON.parse( item ));
						} catch ( e ) {
							alert( 'This is not a valid input.' );
							return;
						}
					}
				}
				val = result;
			}
		}

		var str = parentObj.name || '';
		if( str.indexOf('model') === 0 ) {
			this.updateEmitterModels();
		} else {
			this.PS.set( key, val );
		}
	}

	this.updateEmitterModels = function () {
		var models = [];
		var mc = this.modelControl;
		var i;
		for( i=0; i<this.activeModels.length; i++ ) {
			var name = this.activeModels[ i ];
			var obj = {};
			obj.type = mc[ name + 'Type' ];
			obj.id = mc[ name + 'Id' ];
			obj.width = mc[ name + 'Width' ];
			
			if( obj.type === 'Image' ) { 
				obj.image = mc[ name + 'ImageName' ];
			}

			if( obj.type === 'Sprite' ) { 
				obj.image = mc[ name + 'ImageName' ];
				obj.spriteSetting = JSON.parse( mc[ name + 'SpriteSetting' ]);
			}
			
			if( obj.type === 'Rect' ) {	
				obj.height = mc[ name + 'Height' ];
			}
			
			obj.probability = mc[ name + 'Probability' ];
			obj.properties = JSON.parse( mc[ name + 'Props' ]);

			models.push( obj );
		}
		this.PS.set( 'particleModels', models );
	}

	/*
		Initial Sync with Emitter
	*/

	this.syncWithCurrentData = function ( obj ) {
		var key = obj.map || obj.name;
		var val = null;

		switch( obj.name ) {
			case 'bgImage':
				val = this.getPSProp( 'background.image' ) || App.imageNameArray[ 0 ] || '';
				Interface.PS.set( 'background.image', val );
			break;

			default:
				val = this.getPSProp( key, obj.type );
		}

		if( typeof val === 'object' && val !== null ) {
			var str = '[\n';
			var i;
			for( i=0; i<val.length; i++ ) {
				str += ' ';
				str += JSON.stringify( val[ i ]);
				if( i < val.length-1 ) {
					str += ', ';
					str += '\n';
				}
			}
			str += '\n]';
			val = str;
		}

		if( val === undefined ) {
			val = null;
		}

		return val;
	}

	/*
		Guide Hints
	*/
	
	this.showGuide = function ( x, y, w, h, shape ) {
		var style = {
			left: x + 'px',
			top: y + 'px',
			width: w + 'px',
			height: h + 'px'
		};
		Dom.setStyle( this.blockGuide, style );
		Dom.addClass( this.blockGuide, 'show' );
		if( shape === 'oval' ) {
			Dom.addClass( this.blockGuide, 'oval' );
		}
	}

	this.hideGuide = function ( delay ) {
		var delayTime = delay ? 500 : 0;
		setTimeout( function () {
			Dom.removeClass( parent.blockGuide, 'show' );
			Dom.removeClass( parent.blockGuide, 'oval' );
		}, delayTime );
	}

	this.showVelocityGuide = function ( startAngle, endAngle ) {
		Dom.addClass( this.velGuide, 'show' );
		var ctx = this.velGuideCtx;
		var center = new Vector2D( 60, 60 );
		var dir1 = Vector2D.degreeToVector( startAngle );
		var dir2 = Vector2D.degreeToVector( endAngle );
		ctx.clearRect( 0, 0, 120, 120 );

		ctx.beginPath();
		ctx.moveTo( center.x, center.y );
		ctx.arc( center.x, center.y, 60, 0, Math.PI * 2 );
		ctx.lineTo( center.x, center.y );
		ctx.fillStyle = 'rgba( 255, 255, 255, .4 )';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo( center.x, center.y );
		ctx.arc( center.x, center.y, 58, MathUtils.toRadians( startAngle ), MathUtils.toRadians( endAngle ));
		ctx.lineTo( center.x, center.y );
		ctx.strokeStyle= 'rgba( 0, 0, 0, .5 )';
		ctx.fillStyle = 'rgba( 0, 200, 255, .4 )';
		ctx.lineWidth = 2;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}

	this.showForceGuide = function ( angle ) {
		Dom.addClass( this.forceGuide, 'show' );
		var radius = 60;
		var ctx = this.forceGuideCtx;
		var center = new Vector2D( radius, radius );
		var dir = Vector2D.degreeToVector( angle );
		dir.mult( radius );
		dir.add( center );

		ctx.clearRect( 0, 0, radius * 2, radius * 2 );

		ctx.beginPath()
		ctx.arc( center.x, center.y, radius, 0, Math.PI * 2 );
		ctx.strokeStyle = 'rgba( 0, 0, 0, 0)';
		ctx.fillStyle = 'rgba( 255, 255, 255, 0.3 )';
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc( center.x, center.y, 5, 0, Math.PI * 2 );
		ctx.moveTo( center.x, center.y );
		ctx.lineTo( dir.x, dir.y );
		ctx.strokeStyle= 'rgba( 0, 0, 0, 1 )';
		ctx.fillStyle = 'rgba( 255, 255, 255, .4 )';
		ctx.lineWidth = 2;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	}

	this.hideVelocityGuide = function () {
		Dom.removeClass( this.velGuide, 'show' );
	}

	this.hideForceGuide = function () {
		Dom.removeClass( this.forceGuide, 'show' );
	}
}
