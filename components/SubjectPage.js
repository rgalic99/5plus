import { namesToSubject } from "../constants/SubjectsList";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import { BorderColor, TextColor } from "../utils/color";
import Protected from "./Protected";

const SubjectPage = ({ subject }) => {
	const { name, categories } = subject;
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
						key={category.name}
					>
						<h2 className="my-4 text-3xl sm:text-5xl">
							{category.name}
						</h2>
						<section className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
							{category.questions.map((question, j) => (
								<div
									className="flex p-auto m-auto w-20 h-20 sm:w-32 sm:h-32 rounded-2xl border-4 sm:border-8 bg-white items-center justify-center"
									key={question.question + j}
									css={BorderColor[name]}
								>
									<p className="text-5xl sm:text-8xl font-roboto">
										{j + 1}
									</p>
								</div>
							))}
						</section>
					</section>
				))}
			</section>
			<Footer />
		</Protected>
	);
};
export default SubjectPage;
