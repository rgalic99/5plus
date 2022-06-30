import { spinnerStyle } from "../constants/Styles";

const Loader = ({ show }) => {
	return show ? <p className={spinnerStyle} /> : null;
};

export default Loader;
