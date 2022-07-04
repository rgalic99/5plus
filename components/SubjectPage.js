import { namesToSubject } from "../constants/SubjectsList";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Protected from "./Protected";

const SubjectPage = ({ subject }) => {
	const { name, categories } = subject;
	return (
		<Protected>
			<Header color={name} />
			<h1>{namesToSubject[name]}</h1>
			{categories.map((category) => (
				<li key={category}>
					<h2>{category.name}</h2>
					<ul>
						{category.questions.map((question, j) => (
							<li key={question}>
								<h3>{j + 1}</h3>
							</li>
						))}
					</ul>
				</li>
			))}
			<Footer color={name} />
		</Protected>
	);
};
export default SubjectPage;