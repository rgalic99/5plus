import Header from "../components/Header";
import Link from "next/link";
import Heading, { Heading2 } from "../components/Heading";
import { MainButton, SecondButton } from "../utils/button";

const Home = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12 m-auto">
				<section className="my-4 bg-off_white/50 m-auto col-span-12">
					<Heading text={"PROŠIRI SVOJE ZNANJE DANAS!"} />
					<Heading2 text={"Za one koji žele znati više"} />
				</section>
				<Link href="/login" passHref>
					{SecondButton("PRIJAVA")}
				</Link>
				<Link href="/register" passHref>
					{MainButton("STVORI RAČUN")}
				</Link>
			</section>
		</>
	);
};

export default Home;
