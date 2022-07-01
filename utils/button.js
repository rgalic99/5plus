import Link from "next/link";
import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ rest, style = tw`` }) => [
	tw`col-span-10 col-start-2 m-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`,
	rest,
	style,
]);

const InputMain = styled.input.attrs(() => ({
	type: "submit",
}))`
	${tw`text-white bg-main p-4 col-span-10 col-start-2 m-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`}
`;

const InputSecond = styled.input.attrs(() => ({
	type: "submit",
}))`
	${tw`text-main bg-second p-4 col-span-10 col-start-2 m-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`}
`;

export const MainButton = ({ text, style = tw`` }) => {
	return (
		<StyledButton rest={tw`text-white bg-main p-4`} style={style}>
			{text}
		</StyledButton>
	);
};

export const SecondButton = ({ text, style = tw`` }) => {
	return (
		<StyledButton rest={tw`text-main bg-second p-4`} style={style}>
			{text}
		</StyledButton>
	);
};

export const MainButtonSubmit = ({ text, style = tw`` }) => {
	return (
		<>
			<InputMain style={style} value={text} />
		</>
	);
};

export const SecondButtonSubmit = ({ text, style = tw`` }) => {
	return <InputSecond style={style} value={text} />;
};

export const MainButtonLink = ({ text, css = tw``, link }) => {
	return (
		<StyledButton rest={tw`text-white p-4 bg-main`} style={css}>
			<Link href={link}>
				<a className="block w-full p-4">{text}</a>
			</Link>
		</StyledButton>
	);
};

export const SecondButtonLink = ({ text, css = tw``, link }) => {
	return (
		<StyledButton rest={tw`text-main p-4 bg-second`} style={css}>
			<Link href={link}>
				<a className="block w-full p-4">{text}</a>
			</Link>
		</StyledButton>
	);
};
