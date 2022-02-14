import NavBar from "./NabBar";

const BurgerNavigation = ({ isOpen }) => {
	return (
		<main
			className={`${
				!isOpen ? "translate-x-full" : "translate-x-0"
			} top-0 transform translate fixed left-0 m-0 p-0 bg-second sm:hidden w-screen transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
		>
			<NavBar classes="flex flex-col h-full w-full justify-center items-center" />
		</main>
	);
};

export default BurgerNavigation;
