import { LoginForm } from "../components/Form";
import Header from "../modules/Header";
import Heading from "../components/Heading";
import { LinkTo } from "../utils/link";
import { MainButton } from "../utils/button";
import { SignInButtonGoogle } from "../utils/googleLogin";

const Login = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12">
				<section className="col-span-12 my-8">
					<Heading text={"DOBRODOŠLI NATRAG!"}></Heading>
					<form className="grid grid-cols-12 col-span-12 my-8 text-center">
						<LoginForm />
						<MainButton text="PRIJAVA" />
						{
							//TODO add onSubmit for the form
						}
					</form>
					<SignInButtonGoogle />
					<br />
					<LinkTo href="/register" text="Nemaš račun? Klikni ovdje!" />
				</section>
			</section>
		</>
	);
};

export default Login;
