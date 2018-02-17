
export default [
	{
		name: 'emit',
		type: 'action', //integer
		defaultVal: function () {
			window.Interface.PS.emit();
		}
	},

	{
		name: 'stopEmitting',
		type: 'action',
		defaultVal: function () {
			window.Interface.PS.stopEmitting();
		}
	},

	{
		name: 'pause',
		type: 'action',
		defaultVal: function () {
			window.Interface.PS.pause();
		}
	},

	{
		name: 'resume',
		type: 'action',
		defaultVal: function () {
			window.Interface.PS.resume();
		}
	},

	{
		name: 'empty',
		type: 'action',
		defaultVal: function () {
			window.Interface.PS.empty();
		}
	},

	{
		name: 'getCode',
		type: 'action',
		defaultVal: function () {
			window.Interface.getCode();
		}
	}
];