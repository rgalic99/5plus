import tw from "twin.macro";
import { MainButton } from "../utils/button";

export const LoginForm = () => {
	const formNames = ["email", "password"];
	const formPlaceholder = ["E-mail", "Lozinka"];
	return (
		<form className="grid grid-cols-12 col-span-12 my-8 text-center">
			{formNames.map((el, index) =>
				MakeFormElement(el, formPlaceholder[index])
			)}
			{MainButton("PRIJAVA")}
		</form>
	);
};

export const RegisterForm = () => {
	const formNames = ["email", "name", "lname", "password", "password"];
	const formPlaceholder = [
		"E-mail",
		"Ime",
		"Prezime",
		"Lozinka",
		"Ponovno unesi lozinku",
	];
	return (
		<form className="grid grid-cols-12 col-span-12 my-8 text-center">
			{formNames.map((el, index) =>
				MakeFormElement(el, formPlaceholder[index], Style(el))
			)}
			{MainButton("STVORI RAČUN")}
		</form>
	);
};

const MakeFormElement = (name, placeholder, style = tw``) => {
	const input_style = tw`text-main bg-second rounded-3xl m-3 p-4 col-span-6 col-start-4 drop-shadow-2xl placeholder:text-main text-3xl text-left`;
	return (
		<input
			id={name + placeholder}
			key={name + placeholder}
			name={name}
			type={name}
			placeholder={placeholder}
			autoComplete={name}
			required
			css={input_style}
			style={style}
		></input>
	);
};

const Style = (name) => {
	switch (name) {
		case "name":
			return tw`col-span-3 col-start-4`;
		case "lname":
			return tw`col-span-3 col-start-7`;
		default:
			return tw``;
	}
};
