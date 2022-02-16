import Image from "next/image";
import Header from "../modules/Header";
import { LinkTo } from "../utils/link";

const Custom404 = () => {
	return (
		<>
			<Header></Header>
			<section className="flex flex-col justify-center gap-7">
				<Image
					alt="An error has occured"
					src="/assets/404.svg"
					width="300rem"
					height="300rem"
				></Image>
				<h1 className="text-center text-main text-5xl">
					DOŠLO JE DO GREŠKE
				</h1>
				{LinkTo("/", "Vrati se na naslovnu stranicu!")}
			</section>
		</>
	);
};
export default Custom404;
