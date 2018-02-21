export default [
	{
		name: 'pickRandomModel',
		type: 'boolean',
		defaultVal: true
	},

	{
		name: 'maxParticleAmount',
		type: 'slider',
		range: [ 0, 1500 ],
		defaultVal: 300,
		step: 1
	},

	{
		name: 'emitRate',
		type: 'slider', //0 - 1
		range: [ 0, 1 ],
		defaultVal: 0.1,
		step: 0.01
	},

	{
		name: 'emitAmount',
		type: 'slider', //integer
		range: [ 0, 50 ],
		defaultVal: 1,
		step: 1
	},

	{
		name: 'killIfOutOfCanvas',
		type: 'boolean',
		defaultVal: false
	},

	

	//physics

	{
		name: 'world',
		type: 'folder',

		children: [
			{
				name: 'worldActive',
				type: 'boolean',
				map: 'world.active',
				defaultVal: false,
				step: 1
			},
			{
				name: 'left',
				type: 'slider',
				map: 'world.value.0',
				defaultVal: 0,
				range: [ -200, 1500 ],
				step: 1
			},
			{
				name: 'right',
				type: 'slider',
				map: 'world.value.1',
				defaultVal: 300,
				range: [ -200, 1500 ],
				step: 1
			},
			{
				name: 'top',
				type: 'slider',
				map: 'world.value.2',
				defaultVal: 0,
				range: [ -200, 1500 ],
				step: 1
			},
			{
				name: 'bottom',
				type: 'slider',
				map: 'world.value.3',
				defaultVal: 300,
				range: [ -500, 1500 ],
				step: 1
			},
		]
	},

	{
		name: 'gravityAmount',
		type: 'slider', //integer
		range: [ -5, 5 ],
		defaultVal: 0.1,
		step: 0.01
	},

	{
		name: 'bounceAmount',
		type: 'slider', //integer
		range: [ 0, 0.9 ],
		defaultVal: 0.1,
		step: 0.01
	},

	{
		name: 'globalForce',
		type: 'folder',
		map: 'globalForce',

		children: [
			{
				name: 'forceAngle',
				type: 'slider',
				map: 'globalForce.angle',
				defaultVal: 0,
				range: [ 0, 359 ],
				step: 1
			},

			{
				name: 'forceAmount',
				type: 'slider',
				map: 'globalForce.amount',
				defaultVal: 0.05,
				range: [ 0, 0.5 ],
				step: 0.01
			}
		]
	},

	//particles
	{
		name: 'origin',
		type: 'folder',

		children: [
			{
				name: 'originShape',
				type: 'dropdown',
				map: 'origin.shape',
				options: [ 'rect', 'oval' ]

			},

			{
				name: 'originX',
				type: 'slider',
				map: 'origin.value.x',
				defaultVal: 200,
				range: [ -1000, 1000 ]
			},

			{
				name: 'originY',
				type: 'slider',
				map: 'origin.value.y',
				defaultVal: 200,
				range: [ -1000, 1000 ]
			},

			{
				name: 'originXRange',
				type: 'slider',
				map: 'origin.range.x',
				defaultVal: 0,
				range: [ 0, 1000 ]
			},

			{
				name: 'originYRange',
				type: 'slider',
				map: 'origin.range.y',
				defaultVal: 0,
				range: [ 0, 1000 ]
			}
		]
	},

	{
		name: 'life span',
		type: 'folder',

		children: [
			{
				name: 'lifeSpanValue',
				type: 'slider',
				map: 'lifeSpan.value',
				defaultVal: 2,
				range: [ 0.1, 60 ]
			},

			{
				name: 'lifeSpanRange',
				type: 'slider',
				map: 'lifeSpan.range',
				defaultVal: 0,
				range: [ 0, 50 ]
			}
		]
	},

	{
		name: 'velocityAngle',
		type: 'folder',

		children: [
			{
				name: 'angleValue',
				type: 'slider',
				map: 'velocityAngle.value',
				defaultVal: 0.1,
				range: [ 0, 359 ],
				step: 1
			},

			{
				name: 'angleRange',
				type: 'slider',
				map: 'velocityAngle.range',
				defaultVal: 0.1,
				range: [ 0, 359 ],
				step: 1
			},
		]
	},

	{
		name: 'speed',
		type: 'folder',

		children: [
			{
				name: 'speedValue',
				type: 'slider',
				map: 'speed.value',
				defaultVal: 1,
				range: [ 0, 20 ],
				step: 0.1
			},

			{
				name: 'speedRange',
				type: 'slider',
				map: 'speed.range',
				defaultVal: 0,
				range: [ 0, 20 ],
				step: 0.1
			}
		]
	},
	
	{
		name: 'acceleration',
		type: 'slider',
		range: [ -0.1, 0.1 ],
		defaultVal: 0.001,
		step: 0.01
	},

	{
		name: 'maxSpeed',
		type: 'slider',
		range: [ 0, 50 ],
		defaultVal: 30,
		step: 0.1
	},

	{
		name: 'turbulence',
		type: 'folder',

		children: [
			{
				name: 'tRate',
				type: 'slider',
				map: 'turbulence.rate',
				defaultVal: 0.05,
				range: [ 0, 0.2 ],
				step: 0.01
			},

			{
				name: 'xAmplitude',
				type: 'slider',
				map: 'turbulence.xAmplitude',
				defaultVal: 0.1,
				range: [ 0, 10 ],
				step: 0.01
			},

			{
				name: 'yAmplitude',
				type: 'slider',
				map: 'turbulence.yAmplitude',
				defaultVal: 0.1,
				range: [ 0, 10 ],
				step: 0.01
			}
		]
	}

];
