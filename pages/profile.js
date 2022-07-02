import Protected from "../components/Protected";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { useUserAuth } from "../utils/contextProvider";
import { namesList, subjectList } from "../constants/SubjectsList";
import { Circle } from "rc-progress";
import { ProgressColor } from "../utils/color";
import { useRouter } from "next/router";

const Profile = () => {
	const { user, logOut } = useUserAuth();
	const router = useRouter();
	const handleStudy = () => {
		router.push("/subjects");
	};
	const handleLogOut = () => {
		logOut();
	};
	return (
		<Protected>
			<Header />
			<section className="w-full bg-doodle ">
				<section className="flex flex-row flex-wrap">
					<section className="my-4 pt-4 pb-8 w-min self-center h-min bg-second/60 mx-auto lg:ml-4 text-center rounded-md flex justify-start">
						<p className="sm:p-12 p-8 ml-3 mt-4 sm:ml-4 h-min rounded-full from-violet-600 to-red-700 bg-gradient-to-tr"></p>
						<p className="flex flex-col sm:w-96 mx-3 sm:mx-6 w-60 mt-4 rounded-full p-2 text-3xl text-main">
							Ime: {user?.displayName || "Nepoznato"}
							<button className="bg-main text-white w-52 text-2xl mx-auto p-3 mt-3 rounded-xl">
								Promijeni podatke
							</button>
						</p>
					</section>
					<section className="mt-8 mx-auto grid grid-flow-col grid-cols-2 grid-rows-2">
						{subjectList.map((el, i) => (
							<section
								key={el}
								className="flex flex-col sm:m-4 text-3xl text-main items-center content-center justify-center align-middle"
							>
								<Circle
									percent={50}
									strokeWidth={8}
									strokeColor={`${
										ProgressColor[namesList[i]]
									}`}
									className="sm:h-24 sm:w-24 sm:m-4 h-14 w-14"
									trailColor="#eaeaea"
									trailWidth={8}
								/>
								<p>13/26</p>

								{el}
							</section>
						))}
					</section>
				</section>
				<section className="flex flex-col px-auto">
					<button
						onClick={handleStudy}
						className="bg-main w-52 sm:w-72 text-2xl text-white mx-auto mt-5 p-3 rounded-xl"
					>
						Nastavi Učiti
					</button>
					<button
						onClick={handleLogOut}
						className="bg-second w-52 sm:w-72 text-2xl text-main mx-auto my-5 p-3 rounded-xl"
					>
						Odjavi se
					</button>
				</section>
			</section>
			<Footer />
		</Protected>
	);
};

export default Profile;
