import Link from "next/link";
import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ rest, stlye = tw`` }) => [
	tw`col-span-10 col-start-2 m-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`,
	rest,
	stlye,
]);

export const MainButton = ({ text, stlye = tw`` }) => {
	return (
		<StyledButton rest={tw`text-white bg-main p-4`} style={stlye}>
			{text}
		</StyledButton>
	);
};

export const SecondButton = ({ text, stlye = tw`` }) => {
	return (
		<StyledButton rest={tw`text-main bg-second p-4`} style={stlye}>
			{text}
		</StyledButton>
	);
};

export const MainButtonLink = ({ text, stlye = tw``, link }) => {
	return (
		<StyledButton rest={tw`text-white bg-main`} style={stlye}>
			<Link href={link}>
				<a className="block w-full p-4">{text}</a>
			</Link>
		</StyledButton>
	);
};

export const SecondButtonLink = ({ text, stlye = tw``, link }) => {
	return (
		<StyledButton rest={tw`text-main bg-second`} style={stlye}>
			<Link href={link}>
				<a className="block w-full p-4">{text}</a>
			</Link>
		</StyledButton>
	);
};
