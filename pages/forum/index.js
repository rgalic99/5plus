import Header from "../../modules/Header";
import Footer from "../../modules/Footer";
import { ForumPosts } from "../../constants/ForumPosts";
import Link from "next/link";

const Forum = () => {
	return (
		<>
			<Header />

			<section className="flex flex-col pt-10 pb-5 bg-gradient-to-b from-hci-gradient to-white"></section>

			<section className="mx-auto text-main px-8">
				<section className="pb-4">
					{ForumPosts.map((post) => (
						<section className="h-fit mb-4" key={post.id}>
							<Link
								href={`/forum/${post.title.toLowerCase().replace(/ /g, "-")}`}
							>
								<a>
									<h1 className="text-5xl hover:text-orange-300 underline">
										{post.title}
									</h1>
								</a>
							</Link>
							<p className="text-2xl max-w-prose truncate">{post.body}</p>
						</section>
					))}
				</section>
			</section>

			<Footer />
		</>
	);
};

export default Forum;
