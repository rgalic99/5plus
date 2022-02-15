import tw from "twin.macro";
import {
	loginFormNames,
	loginFormPlaceholder,
	registerFormNames,
	registerFormPlaceholder,
} from "../constants/FormConstants";
import { MainButton } from "../utils/button";

export const RegisterForm = () => {
	return MakeForm(registerFormNames, registerFormPlaceholder, "STVORI RAČUN");
};
export const LoginForm = () => {
	return MakeForm(loginFormNames, loginFormPlaceholder, "PRIJAVA");
};

const MakeForm = (names, placeholder, text) => {
	return (
		<form className="grid grid-cols-12 col-span-12 my-8 text-center">
			{names.map((el, index) => MakeFormElement(el, placeholder[index]))}
			{MainButton(text)}
		</form>
	);
};

const MakeFormElement = (name, placeholder) => {
	const input_style = tw`text-main bg-second text-overflow[elipsis] col-span-10 col-start-2 rounded-3xl m-3 p-4 drop-shadow-2xl placeholder:text-main text-3xl text-left sm:col-start-4 sm:col-span-6`;
	return (
		<input
			id={name + placeholder}
			key={name + placeholder}
			name={name}
			type={name.split("-")[1]}
			placeholder={placeholder}
			autoComplete={name}
			required
			css={input_style}
		></input>
	);
};
