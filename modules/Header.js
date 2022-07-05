import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import BurgerNavigation from "../components/Hamburger";
import {
	BackgroundColor,
	ImageUrlConvert,
	HighlightColor,
	ProfileUrlConvert,
} from "../utils/color";
import { useUserAuth } from "../utils/contextProvider";

const Header = ({ color = "main" }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();
	const [imagePath, setImagePath] = useState([
		"/assets/close.svg",
		"/assets/navbar.svg",
	]);
	const [profilePath, setProfilePath] = useState("/assets/user-main.svg");

	const [isClicked, setIsClicked] = useState(false);

	const { user } = useUserAuth();

	useEffect(() => {
		setPrimary(BackgroundColor[color]);
		setSecondary(HighlightColor[color]);
		setImagePath(ImageUrlConvert[color]);
		setProfilePath(ProfileUrlConvert[color]);
	}, [color]);

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
					<a>
						<Image
							src={"/assets/logo.svg"}
							width="128px"
							height="128px"
							className="m-auto w-32 "
							fill={secondary}
							alt="+"
						/>
					</a>
				</Link>
				<section className="flex justify-end items-center w-full sm:mr-8">
					{user && (
						<Link href="/profile">
							<a>
								<Image
									src={profilePath}
									width="64px"
									height="64px"
									className="mr-4 mt-8"
									alt="O"
								></Image>
							</a>
						</Link>
					)}

					<StyledNav
						rest={tw`ml-5 justify-center cursor-pointer sm:hidden`}
						onClick={() => setIsClicked(!isClicked)}
					>
						<Image
							src={isClicked ? imagePath[0] : imagePath[1]}
							width="360px"
							height="360px"
							className="m-auto z-50"
							alt="="
						></Image>
					</StyledNav>
				</section>
				<BurgerNavigation isOpen={isClicked} showNavbar={setIsClicked} />
			</HeaderStyle>
		</>
	);
};

const HeaderStyle = styled.header(({ color }) => [
	color,
	tw`
	inline-flex w-full text-6xl mx-auto pb-2
		`,
]);

const StyledNav = styled.nav(({ color, rest }) => [
	color,
	tw`w-16 h-16 m-8`,
	rest,
]);

export default Header;
