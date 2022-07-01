import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { MainButton, MainButtonSubmit } from "../utils/button";
import { useUserAuth } from "../utils/contextProvider";
import { useEffect, useRef, useState } from "react";
import {
	errorStyle,
	formStyle,
	input_style,
	invalidStyle,
	name_style1,
	name_style2,
	shared,
} from "../constants/Styles";

export const RegisterForm = () => {
	const { signUp } = useUserAuth();
	const [error, setError] = useState(null);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const password = useRef({});
	password.current = watch("password", "");

	useEffect(() => {
		if (errors?.password2) {
			setError(errors.password2.message);
		} else {
			setError(null);
		}
	}, [errors.password2]);

	const router = useRouter();

	const onSubmit = async (data) => {
		const { email, password } = data;

		try {
			await signUp(email, password);
			router.push("/success");
		} catch (e) {
			setError("Korisnik sa ovom email adresom vec postoji!");
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
				<input
					type="text"
					placeholder="E-mail"
					autoComplete="email"
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.email && <p css={invalidStyle}>X</p>}
				<input
					type="text"
					placeholder="Ime"
					autoComplete="given-name"
					{...register("name", { required: true, maxLength: 80 })}
					css={name_style1}
					style={shared}
				/>
				<input
					type="text"
					placeholder="Prezime"
					autoComplete="family-name"
					{...register("lName", { required: true, maxLength: 100 })}
					css={name_style2}
					style={shared}
				/>
				{(errors.name || errors.lName) && <p css={invalidStyle}>X</p>}
				<input
					type="password"
					placeholder="Lozinka"
					autoComplete="new-password"
					{...register("password", {
						required: true,
						maxLength: 64,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.password && <p css={invalidStyle}>X</p>}
				<input
					type="password"
					placeholder="Ponovljena lozinka"
					autoComplete="new-password"
					{...register("password2", {
						required: true,
						maxLength: 64,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
						validate: (value) =>
							value === password.current ||
							"Lozinke se ne podudaraju!",
					})}
					css={input_style}
					style={shared}
				/>
				{errors.password2 && <p css={invalidStyle}>X</p>}
				<MainButtonSubmit text="STVORI RAČUN" />
			</form>
			{error && <p css={errorStyle}>{error}</p>}
		</>
	);
};

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={formStyle}>
				<input
					type="text"
					placeholder="E-mail"
					autoComplete="email"
					{...register("email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.email && <p css={invalidStyle}>X</p>}
				<input
					type="password"
					placeholder="Lozinka"
					autoComplete="current-password"
					{...register("password", {
						required: true,
						maxLength: 64,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.password && <p css={invalidStyle}>X</p>}

				<MainButton text="PRIJAVA" />
			</form>
		</>
	);
};
