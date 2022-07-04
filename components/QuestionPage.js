import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { shuffle } from "../utils/shuffle";
import Protected from "./Protected";

const QuestionPage = ({ question, pageColor }) => {
	const answers = shuffle([
		question.correctAnswer,
		...question.incorrectAnswers,
	]);
	return (
		<Protected>
			<Header color={pageColor} />
			<main
				className="w-2/3 mx-auto my-4 flex flex-col items-center"
				css={TextColor[pageColor]}
			>
				<h1 className="text-center text-5xl">{question.question}</h1>
				<section className="text-center text-3xl my-8">
					Some subtitle can go here
					{answers.map((answer, index) => (
						<button
							key={index}
							className="bg-transparent hover:bg-gray-200 font-semibold hover:text-second border border-second py-2 px-4 rounded"
						>
							{answer}
						</button>
					))}
				</section>
			</main>
			<Footer color={pageColor} />
		</Protected>
	);
};

export default QuestionPage;
