import React from "react";
import Heading, { Heading2 } from "./Heading";

const HomeBanner = () => {
	return (
		<>
			<section className="my-4 bg-[#FFFAF1]/80 m-auto col-span-12 rounded-md px-4 lg:bg-transparent lg:text-9xl ">
				<Heading text={"PROŠIRI SVOJE ZNANJE DANAS!"} />
				<Heading2 text={"Za one koji žele znati više"} />
			</section>
		</>
	);
};

export default HomeBanner;
