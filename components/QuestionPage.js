import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { BackgroundColor, TextColor } from "../utils/color";
import { shuffle } from "../utils/shuffle";
import Protected from "./Protected";
import tw from "twin.macro";
import { useUserAuth } from "../utils/contextProvider";
import { db } from "../utils/firebase";
import { setDoc, doc, arrayUnion } from "firebase/firestore";

const QuestionPage = ({ question, pageColor }) => {
	const [isAnswered, setIsAnswered] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);
	const [target, setTarget] = useState(null);
	const [answers, setAnswers] = useState(null);
	const router = useRouter();
	const correct = tw`border-4 border-green-600 bg-green-400`;
	const incorrect = tw`border-4 border-red-800 bg-red-600`;

	const { user } = useUserAuth();
	const handleAnswer = (e) => {
		e.preventDefault();
		setIsAnswered(true);
		setIsCorrect(e.target.value === question.correctAnswer);
		setTarget(e.target.value);
		e.target.style = isCorrect ? correct : incorrect;
		if (e.target.value === question.correctAnswer) {
			updateUserProgress(user, question, pageColor);
		}
	};

	useEffect(() => {
		setAnswers(
			shuffle([question.correctAnswer, ...question.incorrectAnswers])
		);
	}, [question]);
	return (
		<Protected>
			<Header color={pageColor} />
			<main
				className="w-4/5 mx-auto my-4 flex flex-col items-center"
				css={TextColor[pageColor]}
			>
				<h1 className="text-left text-5xl">{question.question}</h1>
				<section className="text-center text-3xl my-8 grid grid-flow-row grid-cols-2 grid-rows-2 gap-3">
					{answers?.map((answer) => (
						<button
							key={answer}
							disabled={isAnswered}
							onClick={handleAnswer}
							value={answer}
							className="hover:bg-gray-50 text-xl sm:text-3xl rounded-3xl hover:text-orange-300 text-white w-36 sm:w-80 h-16"
							css={BackgroundColor[pageColor]}
							style={
								target === answer
									? isCorrect
										? correct
										: incorrect
									: null
							}
						>
							{answer}
						</button>
					))}
				</section>
				<div className="text-center text-3xl my-4">
					{isAnswered && (
						<p>{isCorrect ? "Čestitke" : "Pokušaj ponovno"}</p>
					)}
				</div>
				<button
					className="hover:bg-gray-50 text-xl sm:text-3xl mt-4 rounded-3xl hover:text-orange-300 text-white w-36 sm:w-80 h-16"
					css={BackgroundColor[pageColor]}
					onClick={() => router.push(`/subjects/${pageColor}/`)}
				>
					Povratak
				</button>
			</main>
			<Footer color={pageColor} />
		</Protected>
	);
};

export default QuestionPage;

async function updateUserProgress(user, question, pageColor) {
	const userRef = doc(db, "users", user.uid);
	return await setDoc(
		userRef,
		{
			[pageColor]: arrayUnion(question.id),
		},
		{ merge: true }
	)
		.then(() => {})
		.catch((error) => {
			console.log(error);
		});
}
