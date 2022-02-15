import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ rest }) => [
	tw`col-span-10 col-start-2 m-4 p-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`,
	rest,
]);

export const SecondButton = (text) => (
	<StyledButton rest={tw`text-main bg-second`}>{text}</StyledButton>
);

export const MainButton = (text) => (
	<StyledButton rest={tw`text-white bg-main`}>{text}</StyledButton>
);
