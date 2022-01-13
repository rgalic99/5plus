module.exports = {
	theme: {
		extend: {
			fontFamily: {
				main: ['"main"', "sans-serif"],
			},
		},
	},
	plugins: [],
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}",
	],
};
