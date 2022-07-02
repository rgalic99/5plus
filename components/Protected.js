import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUserAuth } from "../utils/contextProvider";

const Protected = ({ children }) => {
	const { user } = useUserAuth();
	const router = useRouter();
	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user, router]);

	return children;
};

export default Protected;
