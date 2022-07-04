import { namesToSubject, subjectToName } from "../constants/SubjectsList";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { BorderColor, TextColor } from "../utils/color";
import Protected from "./Protected";
import Loader from "./Loader";
import {
	getCategoriesNames,
	getQuestionsFromSubject,
	getSubjectName,
} from "../utils/firebase";
import { useEffect, useState } from "react";

const SubjectPage = ({ subject }) => {
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("main");
	const [categories, setCategories] = useState([]);
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		setLoading(true);
		getSubjectName(subject).then((subjectName) => {
			setName(subjectToName[subjectName]);
		});
		getCategoriesNames(subject).then((categoriesName) => {
			getQuestionsFromSubject(subject).then((questionsName) => {
				setQuestions(questionsName);
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
		return <Loader show={loading} />;
	}
	return (
		<Protected>
			<Header color={name} />
			<section className="bg-doodle px-4 py-8">
				<h1
					className="text-5xl my-3 underline uppercase p-2"
					css={TextColor[name]}
				>
					{namesToSubject[name]}
				</h1>
				{categories.map((category) => (
					<section
						className="text-3xl ml-8 mb-2"
						css={TextColor[name]}
						key={category.id}
					>
						<h2 className="my-4 text-3xl sm:text-5xl">{category.name}</h2>
						<section className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
							{category.questions.map((question, j) => (
								<div
									className="flex p-auto m-auto w-20 h-20 sm:w-32 sm:h-32 rounded-2xl border-4 sm:border-8 bg-white items-center justify-center"
									key={question.id}
									css={BorderColor[name]}
								>
									<p className="text-5xl sm:text-8xl font-roboto">{j + 1}</p>
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
