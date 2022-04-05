import React from "react";

const useUserData = () => {
	const [user] = useAuthState(auth);

	useEffect(() => {
		let unsubscribe;

		if (user) {
			const ref = firestore.collection("users").doc(user.uid);
			unsubscribe = ref.onSnapshot((doc) => {
				//setUsername(doc.data()?.username);
			});
		}
		return unsubscribe;
	}, [user]);

	return user;
};

export default useUserData;
