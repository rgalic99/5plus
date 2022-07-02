import tw from "twin.macro";

const Heading = ({ text }) => {
	return (
		<h1
			css={tw`m-8 col-start-4 col-span-6 text-main drop-shadow-2xl`}
			className="text-4xl font-main text-left lg:bg-transparent lg:text-8xl lg:text-right lg:items-center "
		>
			{text}
		</h1>
	);
};

export const Heading2 = ({ text }) => {
	return (
		<h2
			css={tw`text-left m-8 col-start-3 col-span-9 text-main drop-shadow-2xl`}
			className="text-2xl font-second lg:text-5xl lg:items-center"
		>
			{text}
		</h2>
	);
};

export default Heading;
