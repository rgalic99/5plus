import Link from "next/link";
import tw from "twin.macro";

export const LinkTo = (href, text) => (
	<Link href={href} passHref>
		<p
			css={tw`underline cursor-pointer`}
			className="text-main text-center text-3xl col-start-4 col-span-6"
		>
			{text}
		</p>
	</Link>
);
