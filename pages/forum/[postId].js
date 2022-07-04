import React from "react";
import { ForumPosts } from "../../constants/ForumPosts";
import Footer from "../../modules/Footer";
import Header from "../../modules/Header";

const ForumPost = ({ post }) => {
	return (
		<>
			<Header />
			<main className="w-2/3 mx-auto my-0 flex flex-col items-center">
				<h1 className="text-center text-8xl text-gray-800">
					{post.title}
				</h1>
				<h2 className="text-center text-5xl my-8 text-gray-600">
					Some subtitle can go here
				</h2>

				<p className="text-gray-800 text-xl mt-16">{post.body}...</p>
				<p>Read more bellow</p>
			</main>
			<Footer />
		</>
	);
};

export default ForumPost;

const getPostBySlug = (slug) => {
	return ForumPosts.find(
		(post) => post.title.toLowerCase().replace(/ /g, "-") === slug
	);
};

export async function getStaticProps({ params: { postId } }) {
	const post = getPostBySlug(postId);

	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const posts = ForumPosts;

	const paths = posts.map((post) => ({
		params: {
			postId: post.title.toLowerCase().replace(/ /g, "-"),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}
