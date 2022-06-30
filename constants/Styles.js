import tw from "twin.macro";
export const shared = tw`text-main bg-second text-overflow[elipsis] rounded-3xl m-3 p-4 drop-shadow-2xl  text-3xl text-left`;
export const input_style = tw`col-span-10 col-start-2 sm:col-start-4 sm:col-span-6 placeholder:text-main`;
export const name_style1 = tw`col-span-5 col-start-2  sm:col-start-4 sm:col-span-3 placeholder:text-main`;
export const name_style2 = tw`col-span-5 col-start-7  sm:col-start-7 sm:col-span-3 placeholder:text-main`;
export const invalidStyle =
	"text-red-700 my-auto mr-2 text-center text-2xl font-['Exo 2'] sm:text-3xl mr-16";
export const errorStyle =
	"text-red-700 px-4 mb-4 text-center text-2xl sm:text-3xl";
export const formStyle = "grid grid-cols-12 col-span-12 my-8 text-center";
