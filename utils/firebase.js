import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import {
	getAuth,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
export const googleAuthProvider = new GoogleAuthProvider();
//TODO add Facebook login
//export const facebookAuthProvider = new FacebookAuthProvider();
/* const subjects = async (db) => {
	const subjectsCollection = collection(db, "subjects");
	const subjectsSnapshot = await getDocs(subjectsCollection);
	const subjectsList = subjectsSnapshot.docs.map((doc) => {
		return {
			id: doc.id,
			...doc.data(),
		};
	});
	console.log("Here are the subjects: ");
	console.log(subjectsList);
};

subjects(db); */
