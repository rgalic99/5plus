import Header from "../components/Header";
import tw, { styled } from "twin.macro";

const Home = () => {
	const heading_style = tw`text-center m-3 col-start-3 col-span-9 text-main drop-shadow-2xl`;
	return (
		<>
			<Header />
			<section className="grid grid-cols-12">
				<section className="col-span-12 my-16 bg-off_white/50">
					<h1 style={heading_style} className="text-5xl font-main">
						PROŠIRI SVOJE ZNANJE DANAS!
					</h1>
					<h2 style={heading_style} className="text-3xl font-second">
						Za one koji žele znati više
					</h2>
				</section>
				<StyledButton rest={tw`bg-second text-main`}>
					PRIJAVA
				</StyledButton>
				<StyledButton rest={tw`bg-main text-white`}>
					STVORI RAČUN
				</StyledButton>
			</section>
		</>
	);
};

const StyledButton = styled.button(({ rest }) => [
	tw`col-span-6 col-start-4 m-4 p-4 rounded-2xl text-4xl`,
	rest,
]);

export default Home;
