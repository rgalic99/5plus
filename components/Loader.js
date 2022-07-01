const Loader = ({ show }) => {
	return show ? (
		<p className="border-8 rounded-3xl border-gray-400s border-t-main border-t-8 w-12 h-12 animate-spin" />
	) : null;
};

export default Loader;
