import tw from "twin.macro";

export const setBackgroundColor = (color) => {
	switch (color) {
		case "main":
			return tw`bg-main`;
		case "math":
			return tw`bg-math_main`;
		case "history":
			return tw`bg-history_main`;
		case "science":
			return tw`bg-science_main`;
		case "croatian":
			return tw`bg-croatian_main`;
		default:
			return tw`bg-main`;
	}
};

export const setHighlightColor = (color) => {
	switch (color) {
		case "main":
			return tw`bg-second`;
		case "math":
			return tw`bg-math_second`;
		case "history":
			return tw`bg-history_second`;
		case "science":
			return tw`bg-science_second`;
		case "croatian":
			return tw`bg-croatian_second`;
		default:
			return tw`bg-second`;
	}
};
