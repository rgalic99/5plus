import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { BackgroundColor, HighlightColor } from "../utils/color";

const Header = ({ color = "main", isLogged = false }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();

	useEffect(() => {
		setPrimary(BackgroundColor[color]);
		setSecondary(HighlightColor[color]);
	}, [color]);

	return (
		<>
			<HeaderStyle color={primary}>
				<StyledNav
					color={secondary}
					rest={tw`rounded-2xl w-32`}
				></StyledNav>
				<section className="flex justify-end w-full">
					{isLogged && (
						<StyledNav
							color={secondary}
							rest={tw`rounded-full mx-0`}
						></StyledNav>
					)}
					<StyledNav
						color={secondary}
						rest={tw`rounded-xl ml-5`}
					></StyledNav>
				</section>
			</HeaderStyle>
		</>
	);
};

const HeaderStyle = styled.header(({ color }) => [
	color,
	tw`
		h-32 inline-flex w-full text-6xl mx-auto
		`,
]);

const StyledNav = styled.nav(({ color, rest }) => [
	color,
	tw`w-16 h-16 m-8`,
	rest,
]);
export default Header;
