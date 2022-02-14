import { LoginForm } from "../components/Form";
import Header from "../modules/Header";
import Heading from "../components/Heading";
import { LinkTo } from "../utils/link";

const Login = () => {
	return (
		<>
			<Header />
			<section className="grid grid-cols-12">
				<section className="col-span-12 my-8">
					<Heading text={"DOBRODOŠLI NATRAG!"}></Heading>
					<LoginForm />
					{LinkTo("/register", "Nemaš račun? Klikni ovdje!")}
				</section>
			</section>
		</>
	);
};

export default Login;
