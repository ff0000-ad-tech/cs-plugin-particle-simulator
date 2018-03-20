const getActions = function (Interface) {
	
	return [
		{
			name: 'emit',
			type: 'action', //integer
			defaultVal: function () {
				Interface.PS.emit();
			}
		},
	
		{
			name: 'stopEmitting',
			type: 'action',
			defaultVal: function () {
				Interface.PS.stopEmitting();
			}
		},
	
		{
			name: 'pause',
			type: 'action',
			defaultVal: function () {
				Interface.PS.pause();
			}
		},
	
		{
			name: 'resume',
			type: 'action',
			defaultVal: function () {
				Interface.PS.resume();
			}
		},
	
		{
			name: 'empty',
			type: 'action',
			defaultVal: function () {
				Interface.PS.empty();
			}
		},
	
		{
			name: 'getCode',
			type: 'action',
			defaultVal: function () {
				Interface.getCode();
			}
		}
	]
}

export default getActions