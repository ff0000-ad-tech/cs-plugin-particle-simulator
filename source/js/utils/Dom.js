const Dom = {
	create: function ( tagName ) {
		return document.createElement( tagName );
	},

	addClass: function ( el, name ) {
		el.classList.add( name );
	},

	removeClass: function ( el, name ) {
		el.classList.remove( name );
	},

	getBy: function ( name ) {
		switch( true ) {
			case name[ 0 ] === '#':
				//id
				return document.getElementById( name.replace( '#', '' ));
			break;
			case name[ 0 ] === '.':
				//class
				return document.getElementsByClassName( name.replace( '.', '' ));
			break
			default:
				//tag
				return document.getElementsByTagName( name );
		}
	},

	setStyle: function ( el, obj ) {
		
		for ( var key in obj ) {
			el.style[ key ] = obj[ key ];
		}
	},

	setGroupStyle: function ( elList, obj ) {
		var i;
		for( i=0; i<elList.length; i++ ) {
			this.setStyle( elList[ i ], obj );
		}
	}
}

export default Dom