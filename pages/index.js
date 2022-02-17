import Header from "../modules/Header";
import Link from "next/link";
import Heading, { Heading2 } from "../components/Heading";
import { MainButton, SecondButton } from "../utils/button";
import Footer from "../modules/footer";

const Home = (isLogged = flase) => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12 m-auto bg-index bg-cover sm:bg-indexM lg:bg-indexL">
				<section className="my-4 bg-[#F9EAE1]/70 m-auto col-span-12 rounded-md px-4">
					<Heading text={"PROŠIRI SVOJE ZNANJE DANAS!"} />
					<Heading2 text={"Za one koji žele znati više"} />
				</section>
				<Link href={`${isLogged ? "/login" : "/profile"}`} passHref>
					{SecondButton(isLogged ? "PRIJAVA" : "MOJ PROFIL")}
				</Link>
				<Link href={`${isLogged ? "/register" : "/subjects"}`} passHref>
					{MainButton(isLogged ? "STVORI RAČUN" : "NASTAVI UČITI")}
				</Link>
			</section>
			<Footer />
		</>
	);
};

export default Home;
