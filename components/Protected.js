import { useRouter } from "next/router";
import { useUserAuth } from "../utils/contextProvider";

const Protected = ({ children }) => {
	const { user } = useUserAuth();
	const router = useRouter();
	if (!user) {
		router.push("/login");
	}
	return children;
};

export default Protected;
