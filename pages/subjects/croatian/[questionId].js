import Footer from "../../../modules/Footer";
import Header from "../../../modules/Header";
import { getQuestionsFromSubject } from "../../../utils/firebase";

const QuestionPage = () => {
	const pageColor = "croatian";
	return (
		<>
			<Header color={pageColor} />
			<main className="w-2/3 mx-auto my-0 flex flex-col items-center">
				<h1 className="text-center text-8xl text-main"></h1>
				<h2 className="text-center text-5xl my-8 text-gray-600">
					Some subtitle can go here
				</h2>

				<p className="text-gray-800 text-xl mt-16">...</p>
				<p>Read more bellow</p>
			</main>
			<Footer color={pageColor} />
		</>
	);
};

export default QuestionPage;

const getPostBySlug = async (questionId) => {
	return await getQuestionsFromSubject("croatian").then((questions) =>
		questions.find((question) => question.id === questionId)
	);
};

export async function getStaticProps({ params: { questionId } }) {
	const question = await getPostBySlug(questionId);

	return {
		props: {
			post: null,
		},
	};
}

export async function getStaticPaths() {
	const questions = await getQuestionsFromSubject("croatian");
	const paths = questions.flat().map((question) => ({
		params: {
			questionId: question.id,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
