import {get} from '../globalSetting'

const getStyleAnimationData = function(Interface) {
	const images = Interface.images
	return [
	
		// {
		// 	name: 'blendMode',
		// 	type: 'dropdown',
		// 	defaultVal: 'normal',
		// 	options: [ 'normal', 'multiply', 'lighten', 'darken', 'lineardodge', 'linearburn', 'linearlight', 'vividlight', 'pinlight', 'hardmix', 'lightercolor', 'darkercolor', 'difference', 'screen', 'exclusion', 'overlay', 'softlight', 'hardlight', 'colordodge', 'colorburn' ]
		// },
		
		{
			name: 'background',
			type: 'folder',
	
			children: [
				{
					name: 'bgType',
					type: 'dropdown',
					map: 'background.type',
					defaultVal: 'none',
					options: [ 'none', 'color', 'image' ]
				},
	
				{
					name: 'bgColor',
					type: 'color',
					map: 'background.color',
					defaultVal: '#ff0000'
				},
	
				{
					name: 'bgImage',
					type: 'dropdown',
					map: 'background.image',
					defaultVal: '',
					options: images
				},
	
				{
					name: 'bgAlpha',
					type: 'slider',
					map: 'background.alpha',
					range: [ 0, 1 ],
					defaultVal: 1
				}
			]
		},
	
		{
			name: 'clearCanvas',
			type: 'boolean',
			defaultVal: true
		},
	
		{
			name: 'alpha',
			type: 'folder',
	
			children: [
				{
					name: 'alphaValue',
					type: 'slider',
					map: 'alpha.value',
					defaultVal: 0.95,
					range: [ 0, 1 ],
					step: 0.01
				},
	
				{
					name: 'alphaRange',
					type: 'slider',
					map: 'alpha.range',
					defaultVal: 0.15,
					range: [ 0, 1 ],
					step: 0.01
				}
			]
		},
		{
			name: 'transformOrigin',
			type: 'folder',
	
			children: [
				{ 
					name: 'originX',
					type: 'slider',
					map: 'transformOrigin.x',
					defaultVal: 0.5,
					range: [ -1, 2 ],
					step: 0.01
				},
	
				{ 
					name: 'originY',
					type: 'slider',
					map: 'transformOrigin.y',
					defaultVal: 0.5,
					range: [ -1, 2 ],
					step: 0.01
				}
			]
		},
		
		{
			name: 'scale',
			type: 'folder',
	
			children: [
				{
					name: 'scaleValue',
					type: 'slider',
					map: 'scale.value',
					defaultVal: 1.5,
					range: [ 0, 10 ],
					step: 0.01
				},
	
				{
					name: 'scaleRange',
					type: 'slider',
					map: 'scale.range',
					defaultVal: 0.15,
					range: [ 0, 10 ],
					step: 0.01
				}
			]
		},
	
	
		{
			name: 'rotation',
			type: 'folder',
	
			children: [
				{
					name: 'rotationValue',
					type: 'slider',
					map: 'rotation.value',
					defaultVal: 0,
					range: [ -360, 360 ],
					step: 1
				},
	
				{
					name: 'rotationRange',
					type: 'slider',
					map: 'rotation.range',
					defaultVal: 0,
					range: [ 0, 360 ],
					step: 1
				}
			]
		},
	
	
		{
			name: 'color',
			type: 'folder',
	
			children: [
				
				{
					name: 'colorValueR',
					type: 'slider',
					map: 'color.value.0',
					defaultVal: 255,
					range: [ 0, 255 ],
					step: 1
				},
	
				{
					name: 'colorValueG',
					type: 'slider',
					map: 'color.value.1',
					defaultVal: 100,
					range: [ 0, 255 ],
					step: 1
				},
	
				{
					name: 'colorValueB',
					type: 'slider',
					map: 'color.value.2',
					defaultVal: 100,
					range: [ 0, 255 ],
					step: 1
				},
	
				{
					name: 'colorRangeR',
					type: 'slider',
					map: 'color.range.0',
					defaultVal: 255,
					range: [ 0, 255 ],
					step: 1
				},
	
				{
					name: 'colorRangeG',
					type: 'slider',
					map: 'color.range.1',
					defaultVal: 100,
					range: [ 0, 255 ],
					step: 1
				},
	
				{
					name: 'colorRangeB',
					type: 'slider',
					map: 'color.range.2',
					defaultVal: 100,
					range: [ 0, 255 ],
					step: 1
				},
			]
	
		}, 
	
		{
	
			name: 'alphaAnimation',
			type: 'folder',
	
			children: [
	
				{
					name: 'alphaLoop',
					type: 'boolean',
					map: 'animations.alpha.loop',
					defaultVal: true
				},
				
				{
					name: 'alphaDuration',
					type: 'text',
					map: 'animations.alpha.duration',
					defaultVal: 'max'
				},
				{
					name: 'alphaSteps',
					type: 'text',
					map: 'animations.alpha.steps',
					defaultVal: ''
				}
			]
	
		},
	
		{
	
			name: 'scaleAnimation',
			type: 'folder',
	
			children: [
	
				{
					name: 'scaleLoop',
					type: 'boolean',
					map: 'animations.scale.loop',
					defaultVal: true
				},
				
				{
					name: 'scaleDuration',
					type: 'text',
					map: 'animations.scale.duration',
					defaultVal: 'max'
				},
				
				{
					name: 'scaleSteps',
					type: 'text',
					map: 'animations.scale.steps',
					defaultVal: ''
				}
			]
	
		},
	
		{
	
			name: 'rotationAnimation',
			type: 'folder',
	
			children: [
	
				{
					name: 'rotationLoop',
					type: 'boolean',
					map: 'animations.rotation.loop',
					defaultVal: true
				},
				
				{
					name: 'rotationDuration',
					type: 'text',
					map: 'animations.rotation.duration',
					defaultVal: 'max'
				},
				
				{
					name: 'rotationSteps',
					type: 'text',
					map: 'animations.rotation.steps',
					defaultVal: ''
				}
			]
	
		}
	]
}

export default getStyleAnimationData