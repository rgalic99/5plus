import Link from "next/link";

const SubjectCard = ({ name, link, color }) => {
	return (
		<Link passHref href={`/${link}`}>
			<button
				style={color}
				className="border-4 self-center p-5 rounded-2xl my-3 w-80 bg-white bg-opacity-60 text-5xl hover:text-amber-700 cursor-pointer"
			>
				{name}
			</button>
		</Link>
	);
};

export default SubjectCard;
