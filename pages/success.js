import Image from "next/image";
import tw from "twin.macro";
import { Heading2 } from "../components/Heading";
import Protected from "../components/Protected";
import Header from "../modules/Header";
import { MainButtonLink } from "../utils/button";

const AccountSuccess = () => {
	return (
		<Protected>
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
					<Heading2 text="Uspješno ste stvorili račun!" />
					<MainButtonLink
						text="ZAPOČNI"
						link="/subjects"
						css={tw`px-8 text-black`}
					/>
				</section>
			</section>
		</Protected>
	);
};

export default AccountSuccess;
