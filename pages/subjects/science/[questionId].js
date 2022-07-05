import QuestionPage from "../../../components/QuestionPage";
import { getQuestionsFromSubject } from "../../../utils/firebase";

const Question = ({ question }) => {
	return <QuestionPage question={question} pageColor="science" />;
};

export default Question;

const getPostBySlug = async (questionId) => {
	return await getQuestionsFromSubject("science").then((questions) =>
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
	const questions = await getQuestionsFromSubject("science");
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
