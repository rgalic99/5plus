import Link from "next/link";

const {
	navigationItems,
	navigationLinks,
} = require("../constants/NavbarItems");

const NavBar = ({ classes }) => {
	return (
		<aside
			className={`${
				classes ? "block" : "hidden"
			} sm:flex content-evenly space-y-3 list-none font-medium bg-doodle bg-white ${classes}`}
		>
			{navigationItems.map((item, i) => (
				<Link passHref href={`/${navigationLinks[i]}`} key={item}>
					<li className="px-5 py-8 whitespace-nowrap text-center first:mt-8 hover:bg-opacity-50 hover:text-amber-700 cursor-pointer border-b-4 border-b-main w-9/12 h-24 ">
						{item}
					</li>
				</Link>
			))}
		</aside>
	);
};

export default NavBar;
