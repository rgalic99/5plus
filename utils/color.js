import tw from "twin.macro";

export const setBackgroundColor = (color = "main") =>
	({
		main: tw`bg-main`,
		math: tw`bg-math_main`,
		history: tw`bg-history_main`,
		science: tw`bg-science_main`,
		croatian: tw`bg-croatian_main`,
	}[color]);

export const setHighlightColor = (color = "main") =>
	({
		main: tw`text-second`,
		math: tw`text-math_second`,
		history: tw`text-history_second`,
		science: tw`text-science_second`,
		croatian: tw`text-croatian_second`,
	}[color]);
