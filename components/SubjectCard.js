import Link from "next/link";

const SubjectCard = ({ name, link, color }) => {
	return (
		<Link passHref href={`/${link}`}>
			<button
				style={color}
				className="border-4 self-center p-5 rounded-2xl my-3 w-80 bg-white text-5xl"
			>
				{name}
			</button>
		</Link>
	);
};

export default SubjectCard;
