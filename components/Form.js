import tw from "twin.macro";
import { useForm } from "react-hook-form";
import { MainButton, MainButtonSubmit } from "../utils/button";

export const RegisterForm = () => {
	const shared = tw`text-main bg-second text-overflow[elipsis] rounded-3xl m-3 p-4 drop-shadow-2xl  text-3xl text-left`;
	const input_style = tw`col-span-10 col-start-2 sm:col-start-4 sm:col-span-6 placeholder:text-main`;
	const name_style1 = tw`col-span-5 col-start-2  sm:col-start-4 sm:col-span-3 placeholder:text-main`;
	const name_style2 = tw`col-span-5 col-start-7  sm:col-start-7 sm:col-span-3 placeholder:text-main`;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const style = "text-red-700 my-auto text-center text-3xl font-['Exo 2']";

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="grid grid-cols-12 col-span-12 my-8 text-center"
			>
				<input
					type="text"
					placeholder="E-mail"
					autoComplete="email"
					{...register("Email", {
						required: true,
						pattern: /^\S+@\S+$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.Email && <p className={style}>X</p>}
				<input
					type="text"
					placeholder="Ime"
					autoComplete="given-name"
					{...register("Ime", { required: true, maxLength: 80 })}
					css={name_style1}
					style={shared}
				/>
				<input
					type="text"
					placeholder="Prezime"
					autoComplete="family-name"
					{...register("Prezime", { required: true, maxLength: 100 })}
					css={name_style2}
					style={shared}
				/>
				{(errors.Ime || errors.Prezime) && <p className={style}>X</p>}
				<input
					type="password"
					placeholder="Lozinka"
					autoComplete="new-password"
					{...register("Lozinka", {
						required: true,
						maxLength: 64,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.Lozinka && <p className={style}>X</p>}
				<input
					type="password"
					placeholder="Ponovljena lozinka"
					autoComplete="new-password"
					{...register("Ponovljena_lozinka", {
						required: true,
						maxLength: 64,
						pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
					})}
					css={input_style}
					style={shared}
				/>
				{errors.Ponovljena_lozinka && <p className={style}>X</p>}
				<MainButtonSubmit text="STVORI RAČUN" />
			</form>
		</>
	);
};

export const LoginForm = () => {
	const input_style = tw`text-main bg-second text-overflow[elipsis] col-span-10 col-start-2 rounded-3xl m-3 p-4 drop-shadow-2xl placeholder:text-main text-3xl text-left sm:col-start-4 sm:col-span-6`;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const style = "text-red-700 my-auto text-center text-3xl font-['Exo 2']";

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="grid grid-cols-12 col-span-12 my-8 text-center"
		>
			<input
				type="text"
				placeholder="E-mail"
				autoComplete="email"
				{...register("Email", {
					required: true,
					pattern: /^\S+@\S+$/i,
				})}
				css={input_style}
			/>
			{errors.Email && <p className={style}>X</p>}
			<input
				type="password"
				placeholder="Lozinka"
				autoComplete="current-password"
				{...register("Lozinka", {
					required: true,
					maxLength: 64,
					pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
				})}
				css={input_style}
			/>
			{errors.Lozinka && <p className={style}>X</p>}

			<MainButton text="PRIJAVA" />
		</form>
	);
};
