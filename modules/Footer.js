const Footer = () => {
	return (
		<section className="py-12 bg-main font-second text-white">
			<main className="max-w-4xl m-8">
				<div className="flex items-start justify-around">
					<div>
						<h3 className="capitalize text-3xl font-roboto-condensed font-bold text-white t">
							Kontakt
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
							Stranice
						</h3>
						<ul className="mt-4 list-none font-medium md:text-white">
							<li className="whitespace-nowrap cursor-pointer capitalize">
								Naslovna stranica
							</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">Prijava</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">
								Registracija
							</li>
							<li className="whitespace-nowrap cursor-pointer mt-1">Forum</li>
						</ul>
					</div>
				</div>

				<p className="mt-12 mx-auto md:mx-0 text-center">
					Copyright @ 2021 FESB. All rights reserved.
				</p>
			</main>
		</section>
	);
};

export default Footer;
