import Link from "next/link";
import { useRouter } from "next/router";
import { useUserAuth } from "../utils/contextProvider";

const {
	navigationItems,
	navigationLinks,
} = require("../constants/NavbarItems");

const NavBar = ({ classes, showNavbar }) => {
	const { logOut } = useUserAuth();
	const router = useRouter();
	const handleSignOut = () => {
		try {
			logOut();
			showNavbar(false);
			router.push("/");
		} catch (e) {}
	};

	return (
		<aside
			className={`${
				classes ? "block" : "hidden"
			} sm:flex content-evenly space-y-3 list-none font-medium bg-doodle bg-white ${classes}`}
		>
			{navigationItems.map((item, i) =>
				router.pathname === "/" + navigationLinks[i] ? null : (
					<Link passHref href={`/${navigationLinks[i]}`} key={item}>
						<li className="px-5 py-8 whitespace-nowrap text-center first:mt-8 hover:bg-opacity-50 hover:text-amber-700 cursor-pointer border-b-4 border-b-main w-9/12 h-24 ">
							{item}
						</li>
					</Link>
				)
			)}

			<li
				onClick={handleSignOut}
				className="px-5 py-8 whitespace-nowrap text-center first:mt-8 hover:bg-opacity-50 hover:text-amber-700 cursor-pointer border-b-4 border-b-main w-9/12 h-24 "
			>
				Odjava
			</li>
		</aside>
	);
};

export default NavBar;
