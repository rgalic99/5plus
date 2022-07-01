import { MainButtonLink, SecondButtonLink } from "../utils/button";
import { useUserAuth } from "../utils/contextProvider";

const HomeButtons = () => {
	const { user } = useUserAuth();
	return (
		<>
			<SecondButtonLink
				text={user ? "MOJ PROFIL" : "PRIJAVA"}
				link={user ? "/profile" : "/login"}
			/>
			<MainButtonLink
				text={user ? "NASTAVI UČITI" : "STVORI RAČUN"}
				link={user ? "/subjects" : "/register"}
			/>
		</>
	);
};

export default HomeButtons;
