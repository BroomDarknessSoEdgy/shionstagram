const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
	publicPath: "/",
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					postcssPresetEnv({
						autoprefixer: {
							flexbox: "no-2009",
						},
						stage: 3,
						features: {
							"custom-properties": false,
						},
					}),
				],
			},
		},
	},
};
