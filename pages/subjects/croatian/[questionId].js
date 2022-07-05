import QuestionPage from "../../../components/QuestionPage";
import { getQuestionsFromSubject } from "../../../utils/firebase";

const Question = ({ question }) => {
	return <QuestionPage question={question} pageColor="croatian" />;
};

export default Question;

const getPostBySlug = async (questionId) => {
	return await getQuestionsFromSubject("croatian").then((questions) =>
		questions.flat().find((question) => question.id === questionId)
	);
};

export async function getStaticProps({ params: { questionId } }) {
	const question = await getPostBySlug(questionId);

	return {
		props: {
			question: question,
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
