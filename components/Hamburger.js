import NavBar from "./NabBar";

const BurgerNavigation = ({ isOpen, showNavbar, width }) => {
	return (
		<main
			className={`${
				!isOpen ? "translate-x-full" : "translate-x-0"
			} ${width} top-0 transform translate fixed right-0 m-0 p-0 bg-second sm:hidden transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
		>
			<NavBar
				classes="flex flex-col h-full w-full justify-center items-center"
				showNavbar={showNavbar}
			/>
		</main>
	);
};

export default BurgerNavigation;
