import React from "react";
import Heading, { Heading2 } from "./Heading";

const HomeBanner = () => {
	return (
		<>
			<section className="my-4 bg-[#F9EAE1]/70 m-auto col-span-12 rounded-md px-4">
				<Heading text={"PROŠIRI SVOJE ZNANJE DANAS!"} />
				<Heading2 text={"Za one koji žele znati više"} />
			</section>
		</>
	);
};

export default HomeBanner;
