import Image from "next/image";
import { useRouter } from "next/router";
import tw from "twin.macro";
import { useUserAuth } from "./contextProvider";

export const SignInButtonGoogle = () => {
	const { googleSignIn } = useUserAuth();
	const router = useRouter();
	const handleGoogleSignIn = async (e) => {
		e.preventDefault();
		try {
			await googleSignIn();
			router.push("/subjects");
		} catch (e) {
			throw new Error(e);
		}
	};
	return (
		<button
			className="flex items-center text-main justify-center m-auto text-3xl"
			onClick={handleGoogleSignIn}
			css={tw`p-4 border-gray-400 border-2 rounded-2xl`}
		>
			<Image
				width="45rem"
				height="45rem"
				src="/assets/googleLogo.png"
				alt="G"
			/>
			<span className="ml-5">Prijavi se s Google računom!</span>
		</button>
	);
};
