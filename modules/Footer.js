import { SecondButtonSubmitForm } from "../utils/button";
import {
	BackgroundColor,
	HighlightColor,
	TextColor,
	TextSecondColor,
} from "../utils/color";
import { useState, useEffect } from "react";

const Footer = ({ color = "main" }) => {
	const [primary, setPrimary] = useState();
	const [secondary, setSecondary] = useState();
	const [buttonText, setButtonText] = useState();
	const [buttonColor, setButtonColor] = useState();

	useEffect(() => {
		setPrimary(BackgroundColor[color]);
		setSecondary(TextSecondColor[color]);
		setButtonColor(HighlightColor[color]);
		setButtonText(TextColor[color]);
	}, [color]);

	return (
		<section className="py-12" css={primary} style={secondary}>
			<main className="flex flex-col ">
				<div className="flex  justify-around mx-8 items-stretch">
					<div className="hidden md:block">
						<div>
							<div className="text-3xl font-main font-bold text-white">
								Obratite nam se!
							</div>
							<div className="flex items-left">
								<p className="ml-4">+385 123 0000</p>
							</div>
							<div className="flex items-end">
								<p className="ml-4">petplus@fesb.hr</p>
							</div>
						</div>
					</div>

					<div className="hidden md:block">
						<h3 className=" text-3xl font-main font-bold text-white">
							Pošaljite nam poruku!
						</h3>

						<div className="mt-2 flex flex-col font-second">
							<input
								className="mt-4 p-2 w-4/5  rounded-md "
								placeholder="Vaše ime"
								type="text"
							/>
							<input
								className="mt-4 p-2 w-4/5  rounded-md"
								placeholder="Vaš email"
								type="text"
							/>
							<textarea
								className="mt-4 p-2 resize-none  rounded-md"
								placeholder="Vaša poruka"
								cols="30"
								rows="8"
							></textarea>
							<button
								type="submit"
								className="p-2 col-span-10 col-start-2 mx-2 my-4 rounded-2xl text-2xl sm:col-start-4 sm:col-span-6"
								css={buttonColor}
								style={buttonText}
							>
								Pošalji
							</button>
						</div>
					</div>

					<div className="md:hidden">
						<h3 className="capitalize text-3xl font-main font-bold text-white">
							Obratite nam se!
						</h3>
						<ul className="mt-4 list-none font-medium">
							<li className="whitespace-nowrap cursor-pointer">
								+385 123 0000
							</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">
								design@fesb.hr
							</li>
						</ul>
					</div>

					<div>
						<h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white">
							Društvo
						</h3>

						<ul className="mt-4 list-none font-second md:text-white">
							<li className="whitespace-nowrap cursor-pointer">O nama</li>
							<li className="whitespace-nowrap cursor-pointer">Radna mjesta</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">
								Brending
							</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">Novosti</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">Blog</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">
								Kontaktirajte nas
							</li>
						</ul>
					</div>
				</div>

				<div className="flex mx-auto mt-16 items-center md:hidden">
					<h1 className="ml-6  text-3xl  font-main mb-2">
						Hvala Vam na posjeti!
					</h1>
				</div>

				<p className="mt-12 mx-auto  items-center">
					Copyright @ 2021 FESB. All rights reserved.
				</p>
			</main>
		</section>
	);
};

export default Footer;
