import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
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

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
		return () => unsubscribe();
	}, [user]);
	return (
		<userAuthContext.Provider value={{ user, signUp, logIn }}>
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

export const useUserData = () => {
	const [user] = useAuthState(auth);
	return user;
};
