import Link from "next/link";

export const LinkTo = (href, text) => (
	<Link href={href} passHref>
		<p className="text-main text-center underline text-3xl col-start-4 col-span-6">
			{text}
		</p>
	</Link>
);
