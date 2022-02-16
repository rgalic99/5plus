import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";
import { Heading2 } from "../components/Heading";
import Header from "../modules/Header";
import { MainButton } from "../utils/button";

const AccountSuccess = () => {
	return (
		<>
			<Header></Header>
			<section className="flex flex-col justify-center gap-7 bg-doodle">
				<Image
					alt="Account created successfully"
					src="/assets/success.svg"
					width="250rem"
					height="250rem"
					className="rounded-2xl"
				></Image>
				<section className="my-4 bg-second/60 m-auto text-center rounded-md px-4">
					<Heading2 text={"Uspješno ste stvorili račun!"} />
					<Link
						href="/subjects"
						className="text-center px-8"
						passHref
					>
						{MainButton("ZAPOČNI", tw`px-20 rounded-3xl`)}
					</Link>
				</section>
			</section>
		</>
	);
};

export default AccountSuccess;
