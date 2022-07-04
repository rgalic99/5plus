import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "../utils/firebase";

const Protected = ({ children }) => {
	const router = useRouter();
	useEffect(() => {
		if (!auth.currentUser) {
			router.push("/login");
		}
	}, [router]);

	return children;
};

export default Protected;
