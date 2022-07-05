import Protected from "../components/Protected";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { useUserAuth } from "../utils/contextProvider";
import { namesList, subjectList } from "../constants/SubjectsList";
import { Circle } from "rc-progress";
import { ProgressColor } from "../utils/color";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const Profile = () => {
	const { user, logOut } = useUserAuth();
	const router = useRouter();
	const [isClicked, setIsClicked] = useState(false);
	const [newName, setNewName] = useState("");
	const [questions, setQuestions] = useState({});

	useEffect(() => {
		if (user) {
			getUserAnswers(user).then((questions) => {
				setQuestions(questions);
			});
		}
	}, [user]);

	useEffect(() => {
		const section = document.getElementById("nameChange");
		if (isClicked) {
			section.classList.remove("hidden");
		} else {
			section.classList.add("hidden");
		}
	}, [isClicked]);

	const handleSubmit = (e) => {
		updateProfile(auth.currentUser, {
			displayName: newName,
		})
			.then(() => {
				setNewName("");
				setIsClicked(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};
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
					<section className="relative my-4 pt-4 pb-8 w-min self-center h-min rounded-2xl bg-second/60 mx-auto lg:ml-4 text-centers flex justify-start">
						<p className="sm:p-12 p-8 ml-3 mt-4 sm:ml-4 h-min rounded-full from-violet-600 to-red-700 bg-gradient-to-tr"></p>
						<p className="flex items-center flex-col sm:w-96 mx-3 sm:mx-6 w-60 mt-4 rounded-full p-2 text-3xl text-main">
							Ime: {user?.displayName || "Nepoznato"}
							<button
								onClick={() => {
									setIsClicked(true);
								}}
								className="bg-main text-white w-52 text-2xl mx-auto p-3 mt-3 rounded-xl"
							>
								Promijeni podatke
							</button>
						</p>
						<section
							id="nameChange"
							className="absolute w-full h-full bg-second rounded-2xl -mt-4"
						>
							<section className="m-4 flex justify-center">
								<input
									type="text"
									onChange={(e) => {
										setNewName(e.target.value);
									}}
									value={newName}
									placeholder="Novo ime"
									className="mt-8 w-4/5 h-14 rounded-2xl text-main placeholder:text-main bg-purple-200 text-overflow[elipsis] m-3 p-4 drop-shadow-2xl text-3xl text-left"
								/>
							</section>
							<section className="m-4 flex justify-around gap-2">
								<button
									onClick={() => {
										setIsClicked(false);
									}}
									className="text-main bg-second w-5/12 border-2 border-main rounded-2xl text-lg sm:text-4xl"
								>
									OTKAŽI
								</button>
								<button
									type="submit"
									onClick={handleSubmit}
									className="text-white bg-main w-5/12 border-2 border-main rounded-2xl text-lg  sm:text-4xl"
								>
									PROMIJENI
								</button>
							</section>
						</section>
					</section>
					<section className="mt-8 mx-auto grid grid-flow-col grid-cols-2 grid-rows-2">
						{subjectList.map((el, i) => (
							<section
								key={el}
								className="flex flex-col sm:m-4 text-3xl text-main items-center content-center justify-center align-middle"
							>
								<Circle
									percent={
										(questions && questions[namesList[i]]?.length) || 0 / 30
									}
									strokeWidth={8}
									strokeColor={`${ProgressColor[namesList[i]]}`}
									className="sm:h-24 sm:w-24 sm:m-4 h-14 w-14"
									trailColor="#eaeaea"
									trailWidth={8}
								/>
								<p>{questions[namesList[i]]?.length || 0}/30</p>

								{el}
							</section>
						))}
					</section>
				</section>
				<section className="flex flex-col px-auto">
					<button
						onClick={handleStudy}
						className="bg-main w-52 py-4 sm:w-72 text-2xl sm:text-4xl text-white mx-auto mt-5 p-3 rounded-xl"
					>
						Nastavi Učiti
					</button>
					<button
						onClick={handleLogOut}
						className="bg-second py-4 w-52 sm:w-72 text-2xl sm:text-4xl text-main mx-auto my-5 p-3 rounded-xl"
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

async function getUserAnswers(user) {
	if (db) {
		const userRef = doc(db, "users", user.uid);

		const userSnap = await getDoc(userRef);
		const userData = userSnap.data();

		return userData;
	}
}
