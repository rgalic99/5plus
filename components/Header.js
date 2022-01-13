import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import { setBackgroundColor, setHighlightColor } from "../utils/color";

const Header = ({ color = "main" }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();

	useEffect(() => {
		setPrimary(setBackgroundColor(color));
		setSecondary(setHighlightColor(color));
	}, [color]);

	const HeaderStyle = styled.header(() => [primary, tw`h-24`]);
	return (
		<>
			<HeaderStyle />
		</>
	);
};

export default Header;
