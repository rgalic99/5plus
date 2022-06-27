import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

export const useUserData = () => {
	const [user] = useAuthState(auth);
	return user;
};
