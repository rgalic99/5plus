import SubjectCard from "../../components/SubjectCard";
import { namesList, subjectList } from "../../constants/SubjectsList";
import Header from "../../modules/Header";
import { BorderColor } from "../../utils/color";
import Protected from "../../components/Protected";
import Footer from "../../modules/Footer";

const Subjects = () => {
	return (
		<Protected>
			<Header />
			<section className="flex flex-col bg-doodle py-3 px-auto">
				{subjectList.map((el, i) => (
					<SubjectCard
						key={el}
						name={el}
						link={"subjects/" + namesList[i]}
						color={BorderColor[namesList[i]]}
					/>
				))}
			</section>
			<Footer />
		</Protected>
	);
};

export default Subjects;
