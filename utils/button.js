import tw, { styled } from "twin.macro";

const StyledButton = styled.button(({ rest, stlye = tw`` }) => [
	tw`col-span-10 col-start-2 m-4 p-4 rounded-2xl text-4xl sm:col-start-4 sm:col-span-6`,
	rest,
	stlye,
]);

export const SecondButton = (text, stlye = tw``) => (
	<StyledButton rest={tw`text-main bg-second`} style={stlye}>
		{text}
	</StyledButton>
);

export const MainButton = (text, stlye = tw``) => (
	<StyledButton rest={tw`text-white bg-main`} style={stlye}>
		{text}
	</StyledButton>
);
