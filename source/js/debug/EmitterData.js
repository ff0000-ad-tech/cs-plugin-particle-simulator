export default {
	particleModels: [
		{
			type: 'Circle',
			id: 'model0',
			image: '',
			width: 8,
			height: 10,
			probability: 1,
			properties: {}
		}
	],
	pickRandomModel: true,
	maxParticleAmount: 800,

	emitRate: 0.7,
	emitAmount: 1,

	killIfOutOfCanvas: true,
	background: {
		type: 'none',
		color: '#005a66',
		image: '',
		alpha: 1
	},
	clearCanvas: true,

	world: {
		active: false,
		value: [ 0, 300, 0, 250 ]
	},

	globalForce: {
		angle: 20,
		amount: 0
	},
	gravityAmount: 0,
	bounceAmount: 0.3,

	origin: {
		value: { x: 60, y: 60 },
		range: { x: 60, y: 60 },
		shape: 'rect'
	},

	lifeSpan: {
		value: 2,
		range: 0
	},

	velocityAngle: {
		value: 270,
		range: 120,
	},

	speed: {
		value: 1,
		range: 0.1
	},

	turbulence: {
		rate: 0.01,
		xAmplitude: 5,
		yAmplitude: 5
	},

	maxSpeed: 30,
	acceleration: 0.0,

	alpha: {
		value: 1,
		range: 0
	},

	scale: {
		value: 1,
		range: 0.4
	},

	rotation: {
		value:0 ,
		range: 100
	},

	transformOrigin: { x: 0.5, y: 0.5 },

	color: {
		value: [ 200, 200, 200 ],
		range: [ 90, 90, 90 ]
	},

	animations: {

		alpha: {
			loop: false,
			duration: 'max',
			steps: [
				{ s: 0, v: 0 },
				{ s: 0.05, v: 1 },
				{ s: 0.95, v: 1 },
				{ s: 1, v: 0 }
			]
		},

		scale: {
			loop: true,
			duration: 'max',
			steps: []
		},

		rotation: {
		 loop: true,
		 duration: 0.5,
			steps: []
		}
	}
};
