const postcssPresetEnv = require("postcss-preset-env");
const cssNano = require("cssnano");

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
					cssNano({
						preset: "default",
					}),
				],
			},
		},
	},
	configureWebpack: {
		plugins: [
			require("unplugin-element-plus/webpack")({
				// options
			}),
		],
	},
};
