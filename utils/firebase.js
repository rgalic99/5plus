import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { getAuth } from "firebase/auth";
import {
	getFirestore,
	collection,
	getDocs,
	doc,
	getDoc,
} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAvr_-zcaQ6WP3TvSAXL_vLb2XzHlMxS50",
	authDomain: "petplus-b53d8.firebaseapp.com",
	projectId: "petplus-b53d8",
	storageBucket: "petplus-b53d8.appspot.com",
	messagingSenderId: "914868329858",
	appId: "1:914868329858:web:74d2d285dfdccad1b4839b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// onAuthStateChanged(auth, (user) => {
// 	// Check for user status
// });

export const db = getFirestore(app);
//TODO add Facebook login
//export const facebookAuthProvider = new FacebookAuthProvider();

export const getSubjectName = async (subjectName) => {
	const subject = await getSubject(subjectName)
		.then((data) => data[0].name)
		.catch((err) => console.log(err));
	return subject;
};

export const getCategoriesNames = async (subjectName) => {
	const categories = await getCategoriesFromSubject(subjectName);
	return categories.map((category) => {
		return { name: category.name, id: category.id };
	});
};

const getCategoriesFromSubject = async (subjectName) => {
	const subject = await getSubject(subjectName);
	return await getCategories(subject);
};

export const getQuestionsFromSubject = async (subjectName) => {
	return getCategoriesFromSubject(subjectName).then((data) =>
		questionsFromCategories(data).then((data) => data)
	);
};

const questionsFromCategories = async (categories) => {
	const questions = await Promise.all(
		categories.map(async (category) => {
			const questionsRef = collection(db, category.url);
			const questionsSnap = await getDocs(questionsRef);
			const questionsList = questionsSnap.docs.map((question) => {
				return {
					id: question.id,
					question: question.data().question,
					correctAnswer: question.data().correctAnswer,
					incorrectAnswers: question.data().incorrectAnswers,
				};
			});
			return questionsList;
		})
	);

	return questions;
};

async function getSubject(subjectName) {
	const subjectRef = collection(db, subjectName);
	const subjectSnap = await getDocs(subjectRef);
	const subject = subjectSnap.docs.map((doc) => {
		return {
			id: doc.id,
			name: doc.data().name,
			url: subjectName + "/" + doc.id + "/categories",
		};
	});
	return subject;
}

async function getCategories(subject) {
	const subjectCategories = await Promise.all(
		subject.map(async (categorny) => {
			const categoryRef = collection(db, categorny.url);
			const categorySnap = await getDocs(categoryRef);
			const questions = categorySnap.docs.map((category) => {
				return {
					id: category.id,
					name: category.data().name,
					url: categorny.url + "/" + category.id + "/questions",
				};
			});
			return questions;
		})
	);
	return subjectCategories[0];
}
