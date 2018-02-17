export const particleModel = [

	{
		name: 'addParticleModel',
		type: 'action', 
		defaultVal: function () {
			window.Interface.addParticleModel();
		}
	}
];

export const getDefaultNewParticleModelData = function ( name ) {

	return [
		{
			name: name + 'Type',
			type: 'dropdown',
			defaultVal: 'Circle',
			options: [ 'Image', 'Circle', 'Rect', 'Sprite' ],
			modelKey: 'type'
		},

		{
			name: name + 'ImageName',
			type: 'dropdown',
			defaultVal: window.App.imageNameArray[ 0 ] || '',
			options: window.App.imageNameArray,
			modelKey: 'image'
		},

		{
			name: name + 'Width',
			type: 'text',
			defaultVal: 10,
			min: 0,
			modelKey: 'width'
		},

		{
			name: name + 'Height',
			type: 'text',
			defaultVal: 10,
			min: 0,
			modelKey: 'height'
		},
		{
			name: name + 'Probability',
			type: 'slider',
			range: [ 0.1, 50 ],
			defaultVal: 1,
			min: 0.1,
			modelKey: 'probability'
		},

		{
			name: name + 'Props',
			type: 'text',
			defaultVal: '{}',
			modelKey: 'properties'
		},

		{
			name: name + 'SpriteSetting',
			type: 'text',
			defaultVal: {frameWidth:0,frameHeight:0,frameNumber:1,speed:0.2,loop:true},
			modelKey: 'spriteSetting'
		},

		{
			name: name + 'Id',
			type: 'text',
			defaultVal: name,
			modelKey: 'id'
		},

		{
			name: name + 'Delete',
			type: 'action',
			modelKey: null,
			defaultVal: function () {
				window.Interface.deleteParticleModel( name );
			}

		}
	];
}


