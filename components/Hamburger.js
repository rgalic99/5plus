import NavBar from "./NabBar";

const BurgerNavigation = ({ isOpen, showNavbar }) => {
	return (
		<section
			id="burger-nav"
			className={`${
				!isOpen ? "translate-x-full" : "translate-x-0"
			} top-0 transform translate w-screen fixed right-0 m-0 p-0 bg-second sm:hidden transition duration-500 ease-in-out flex-col justify-center items-center h-screen z-40`}
		>
			<NavBar
				classes="flex flex-col h-full w-full justify-center items-center"
				showNavbar={showNavbar}
			/>
		</section>
	);
};

export default BurgerNavigation;
