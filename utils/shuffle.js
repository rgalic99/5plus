export const shuffle = (answers) => {
	let currentIndex = answers.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[answers[currentIndex], answers[randomIndex]] = [
			answers[randomIndex],
			answers[currentIndex],
		];
	}

	return answers;
};
