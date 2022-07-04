import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import BurgerNavigation from "../components/Hamburger";
import { BackgroundColor, HighlightColor } from "../utils/color";
import { useUserAuth } from "../utils/contextProvider";

const Header = ({ color = "main" }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();

	const { user } = useUserAuth();

	useEffect(() => {
		setPrimary(BackgroundColor[color]);
		setSecondary(HighlightColor[color]);
	}, [color]);

	const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
		const main = document.getElementsByTagName("main")[0];
		if (isClicked) {
			main.classList.add("overflow-hidden");
		} else {
			main.classList.remove("overflow-hidden");
		}
	}, [isClicked]);

	return (
		<>
			<HeaderStyle color={primary}>
				<Link href="/" passHref>
					<StyledNav color={secondary} rest={tw`rounded-2xl w-32`} />
				</Link>
				<section className="flex justify-end w-full">
					{user && (
						<Link href="/profile">
							<a>
								<StyledNav color={secondary} rest={tw`rounded-full mr-4`} />
							</a>
						</Link>
					)}

					{user && (
						<StyledNav
							rest={tw`ml-5 justify-center cursor-pointer sm:hidden`}
							onClick={() => setIsClicked(!isClicked)}
						>
							<Image
								src={isClicked ? "/assets/close.svg" : "/assets/navbar.svg"}
								width="360px"
								height="360px"
								className="m-auto z-50"
								alt="="
							></Image>
						</StyledNav>
					)}
				</section>
				<BurgerNavigation isOpen={isClicked} showNavbar={setIsClicked} />
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
