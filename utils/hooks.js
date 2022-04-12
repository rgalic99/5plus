import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

const useUserData = () => {
	const [user] = useAuthState(auth);
	return user;
};

export default useUserData;
