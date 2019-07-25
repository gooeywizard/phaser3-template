module.exports = function(api) {
	api.cache(true);
	
	const presets = [
		[
			"@babel/preset-env",
			{
				"useBuiltIns": "entry",
				"targets": {
					"electron": "5.0.8"
				}
			}
		]
	];
	
	const plugins = [];
	
	return {
		presets,
		plugins
	};
}