import "../styles/globals.css";
import Head from "next/head";
import { UserAuthProvider } from "../utils/contextProvider";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<UserAuthProvider>
				<Component {...pageProps} />
			</UserAuthProvider>
		</>
	);
}

export default MyApp;
