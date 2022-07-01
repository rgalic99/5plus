import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithRedirect,
	GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";

const userAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
	const [user, setUser] = useState("");
	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const logIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {
		return signOut(auth);
	};

	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		return signInWithRedirect(auth, provider);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return () => unsubscribe();
	}, [user]);
	return (
		<userAuthContext.Provider
			value={{ user, signUp, logIn, logOut, googleSignIn }}
		>
			{children}
		</userAuthContext.Provider>
	);
};

export const useUserAuth = () => {
	const context = useContext(userAuthContext);
	if (context === undefined) {
		throw new Error("useUserAuth must be used within a UserAuthProvider");
	}
	return context;
};
