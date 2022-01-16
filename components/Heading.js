import tw from "twin.macro";

const Heading = ({ text }) => {
	return (
		<h1
			css={tw`m-3 col-start-4 col-span-6 text-main drop-shadow-2xl`}
			className="text-5xl font-main text-center"
		>
			{text}
		</h1>
	);
};

export const Heading2 = ({ text }) => {
	return (
		<h2
			css={tw`text-center m-8 col-start-3 col-span-9 text-main drop-shadow-2xl`}
			className="text-3xl font-second"
		>
			{text}
		</h2>
	);
};

export default Heading;
