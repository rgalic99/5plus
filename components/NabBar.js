const { navigationItems } = require("../constants/NavbarItems");

const NavBar = ({ classes }) => {
	return (
		<nav
			className={`${
				classes ? "block" : "hidden"
			} sm:flex content-evenly space-y-3 list-none font-medium bg-doodle bg-white ${classes}`}
		>
			{navigationItems.map((item) => (
				<li
					key={item}
					className="px-5 py-8 whitespace-nowrap text-center hover:bg-opacity-50 hover:text-amber-700 cursor-pointer border-b-4 border-b-main w-9/12 h-24 "
				>
					{item}
				</li>
			))}
		</nav>
	);
};

export default NavBar;
