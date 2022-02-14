import { RegisterForm } from "../components/Form";
import Header from "../modules/Header";
import Heading from "../components/Heading";
import { LinkTo } from "../utils/link";

const Register = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12">
				<section className="col-span-12 my-8">
					<Heading text={"ZAPOČNI DANAS!"} />
					<RegisterForm />
					{LinkTo("/login", "Imaš račun? Prijavi se!")}
				</section>
			</section>
		</>
	);
};

export default Register;
