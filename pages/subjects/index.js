import SubjectCard from "../../components/SubjectCard";
import { namesList, subjectList } from "../../constants/SubjectsList";
import Header from "../../modules/Header";
import { BorderColor } from "../../utils/color";

const Subjects = () => {
	return (
		<>
			<Header />
			<section className="flex flex-col bg-doodle py-3 px-auto">
				{subjectList.map((el, i) => (
					<SubjectCard
						key={el}
						name={el}
						link={namesList[i]}
						color={BorderColor[namesList[i]]}
					/>
				))}
			</section>
		</>
	);
};

export default Subjects;