import Image from "next/image";
import React from "react";
import { auth, googleAuthProvider } from "./firebase";
import { signInWithRedirect } from "firebase/auth";
import tw from "twin.macro";

export const SignInButtonGoogle = () => {
	const signInWithGoogle = async () => {
		await signInWithRedirect(auth, googleAuthProvider);
	};

	return (
		<button
			className="flex items-center text-main justify-center m-auto text-3xl"
			onClick={signInWithGoogle}
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

export const SignOutButton = () => {
	return <button onClick={() => auth.signOut()}>Odjava</button>;
};
