import { RegisterForm } from "../components/Form";
import Header from "../modules/Header";
import Heading from "../components/Heading";
import { LinkTo } from "../utils/link";
import { SignInButtonGoogle } from "../utils/googleLogin";

const Register = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12">
				<section className="col-span-12 my-8">
					<Heading text={"ZAPOČNI DANAS!"} />
					<RegisterForm />
					<SignInButtonGoogle />
					<br />
					<LinkTo href="/login" text="Imaš račun? Prijavi se!" />
				</section>
			</section>
		</>
	);
};

export default Register;
