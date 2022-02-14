module.exports = {
	mode: "jit",
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				main: ['"main"', "sans-serif"],
				second: ['"second"', "sans-serif"],
			},
			colors: {
				main: "#4b3566",
				second: "#cabcdc",
				math_main: "#6B69B8",
				math_second: "#C7C6F3",
				croatian_main: "#B85151",
				croatian_second: "#E2BABA",
				science_main: "#61845C",
				science_second: "#BBE1B4",
				history_main: "#B18E48",
				history_second: "#F7E1B7",
				off_white: "FAFAFA",
			},
			backgroundImage: {
				hero: "url('/assets/hero-image.svg')",
				burger: "url('/assets/navbar.svg')",
				doodle: "url('/assets/doodle.svg')",
			},
		},
	},
	plugins: [],
};
