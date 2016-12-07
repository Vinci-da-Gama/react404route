const warn = (values) => {
	const warnings = {};

	console.log('4 -- values.age is: ', values.age);
	if (Number(values.age) < 18) {
		warnings.age = "Sorry, You should be older than 18, but donot worry, this is just warning.";
	}

	return warnings;
}

export default warn;