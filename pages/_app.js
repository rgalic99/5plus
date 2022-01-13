import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
	return <Component className="font-main" {...pageProps} />;
};

export default MyApp;
