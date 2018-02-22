import {get} from '../globalSetting'

export const getParticleModelAction = function(Interface) {
	return [
		{
			name: 'addParticleModel',
			type: 'action', 
			defaultVal: function () {
				Interface.addParticleModel();
			}
		}
	]
}


export const getDefaultNewParticleModelData = function(Interface) {
	const images = get('loadedImageDict')
	
	return (name) => {
	
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
				defaultVal: images[ 0 ] || '',
				options: images,
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
					Interface.deleteParticleModel( name );
				}
	
			}
		];
	}
}



