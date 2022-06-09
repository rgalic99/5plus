import Header from "../modules/Header";
import Footer from "../modules/Footer";
import HomeButtons from "../components/HomeButtons";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12 m-auto pb-6 bg-index bg-cover sm:bg-indexM lg:bg-indexL">
				<HomeBanner />
				<HomeButtons />
			</section>
			<Footer />
		</>
	);
};

export default Home;
