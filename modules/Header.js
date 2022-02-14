import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import BurgerNavigation from "../components/Hamburger";
import { BackgroundColor, HighlightColor } from "../utils/color";

const Header = ({ color = "main", isLogged = false }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();

	useEffect(() => {
		setPrimary(BackgroundColor[color]);
		setSecondary(HighlightColor[color]);
	}, [color]);

	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		if (isClicked) {
			body.classList.add("overflow-hidden");
		} else {
			body.classList.remove("overflow-hidden");
		}
	}, [isClicked]);

	return (
		<>
			<HeaderStyle color={primary}>
				<Link href="/" passHref>
					<StyledNav color={secondary} rest={tw`rounded-2xl w-32`} />
				</Link>

				<section className="flex justify-end w-full">
					{isLogged && (
						<StyledNav
							color={secondary}
							rest={tw`rounded-full mx-0`}
						/>
					)}

					<StyledNav
						rest={tw`ml-5 justify-center cursor-pointer sm:hidden`}
						onClick={() => setIsClicked(!isClicked)}
					>
						<Image
							src={
								isClicked
									? "/assets/close.svg"
									: "/assets/navbar.svg"
							}
							width="360px"
							height="360px"
							className="m-auto z-50"
							alt="="
						></Image>
					</StyledNav>
				</section>
				<BurgerNavigation isOpen={isClicked} />
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
