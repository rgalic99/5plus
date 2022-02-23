import { MainButtonLink, SecondButtonLink } from "../utils/button";

const HomeButtons = ({ isLogged = false }) => {
	return (
		<>
			<SecondButtonLink
				text={isLogged ? "MOJ PROFIL" : "PRIJAVA"}
				link={isLogged ? "/profile" : "/login"}
			/>
			<MainButtonLink
				text={isLogged ? "NASTAVI UČITI" : "STVORI RAČUN"}
				link={isLogged ? "/subjects" : "/register"}
			/>
		</>
	);
};

export default HomeButtons;
