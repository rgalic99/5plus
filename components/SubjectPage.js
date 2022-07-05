import { namesToSubject, subjectToName } from "../constants/SubjectsList";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import {
	BackgroundColor,
	BorderColor,
	BorderTopColor,
	TextColor,
} from "../utils/color";
import Protected from "./Protected";
import {
	db,
	getCategoriesNames,
	getQuestionsFromSubject,
	getSubjectName,
} from "../utils/firebase";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { doc, getDoc } from "firebase/firestore";
import { useUserAuth } from "../utils/contextProvider";

const SubjectPage = ({ subject }) => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("main");
	const [categories, setCategories] = useState([]);
	const [answered, setAnswered] = useState([]);
	const { user } = useUserAuth();

	useEffect(() => {
		if (user) {
			getUserAnswers(user, subject).then((questions) => {
				setAnswered(questions);
			});
		}
	}, [subject, user]);

	useEffect(() => {
		setLoading(true);
		getSubjectName(subject).then((subjectName) => {
			setName(subjectToName[subjectName]);
		});
		getCategoriesNames(subject).then((categoriesName) => {
			getQuestionsFromSubject(subject).then((questionsName) => {
				setCategories(
					categoriesName.map((category, i) => {
						return {
							name: category.name,
							id: category.id,
							questions: questionsName[i],
						};
					})
				);
				setLoading(false);
			});
		});
	}, [subject]);
	if (loading) {
		return (
			<p
				className="border-8 rounded-full border-gray-400s mt-8 border-t-8 w-64 h-64 mx-auto animate-spin"
				css={BorderTopColor[subject]}
			/>
		);
	}
	return (
		<Protected>
			<Header color={name} />
			<section className="bg-doodle px-4 py-8">
				<h1
					className="text-5xl text-white w-fit px-3 rounded-2xl my-3 uppercase p-2"
					css={BackgroundColor[name]}
					onClick={() => router.push("/subjects/")}
				>
					<Image
						src="/assets/arrow.svg"
						alt="<-"
						width={32}
						height={32}
					/>{" "}
					<span>{namesToSubject[name]}</span>
				</h1>
				{categories.map((category) => (
					<section
						className="text-3xl ml-8 mb-2"
						css={TextColor[name]}
						key={category.id}
					>
						<h2 className="my-4 text-3xl sm:text-5xl">
							{category.name}
						</h2>
						<section className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
							{category.questions.map((question, j) => (
								<div
									className="flex p-auto m-auto w-20 h-20 sm:w-32 sm:h-32 rounded-2xl border-4 sm:border-8 bg-white items-center justify-center"
									key={question.id}
									css={BorderColor[name]}
								>
									{check(answered, question.id) ? (
										<p
											className="text-5xl border-2 rounded-lg sm:text-8xl w-full h-full flex items-center justify-center p-0 m-0 font-roboto text-white"
											css={BackgroundColor[name]}
											style={BorderColor[name]}
										>
											{j + 1}
										</p>
									) : (
										<Link
											href={`/subjects/${name}/${question.id}`}
										>
											<a>
												<p className="text-5xl sm:text-8xl font-roboto">
													{j + 1}
												</p>
											</a>
										</Link>
									)}
								</div>
							))}
						</section>
					</section>
				))}
			</section>
			<Footer color={name} />
		</Protected>
	);
};
export default SubjectPage;

async function getUserAnswers(user, pageColor) {
	if (!db) return [];
	const userRef = doc(db, "users", user.uid);

	const userSnap = await getDoc(userRef);
	const userData = userSnap.data();

	return userData[pageColor] ? userData[pageColor] : [];
}

const check = (array, id) => {
	return array?.find((item) => item === id);
};
