import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ rest }) => [
	tw`col-span-6 col-start-4 m-4 p-4 rounded-2xl text-4xl`,
	rest,
]);

export const SecondButton = (text) => (
	<StyledButton rest={tw`text-main bg-second`}>{text}</StyledButton>
);

export const MainButton = (text) => (
	<StyledButton rest={tw`text-white bg-main`}>{text}</StyledButton>
);
