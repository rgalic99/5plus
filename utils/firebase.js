import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAvr_-zcaQ6WP3TvSAXL_vLb2XzHlMxS50",
	authDomain: "petplus-b53d8.firebaseapp.com",
	projectId: "petplus-b53d8",
	storageBucket: "petplus-b53d8.appspot.com",
	messagingSenderId: "914868329858",
	appId: "1:914868329858:web:74d2d285dfdccad1b4839b",
};

if (!firebase.getApps().length) {
	firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
