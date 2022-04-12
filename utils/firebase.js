import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const storage = getStorage(app);
export const googleAuthProvider = new GoogleAuthProvider();
//TODO add Facebook login
//export const facebookAuthProvider = new FacebookAuthProvider();
