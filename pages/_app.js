import "../styles/globals.css";
import Head from "next/head";
import { UserContext } from "../utils/context";
import useUserData from "../utils/hooks";

function MyApp({ Component, pageProps }) {
	const userData = useUserData();
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<UserContext.Provider value={userData}>
				<Component {...pageProps} />
			</UserContext.Provider>
		</>
	);
}

export default MyApp;
