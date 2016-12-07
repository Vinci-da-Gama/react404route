const sleepSimulateServerDelay = (ms) => new Promise((resolve, reject) => { setTimeout(resolve, ms) });

const asyncValidate = (values, dispatch) => {
	let textAry = ['td','jd','zd','hsw','kyd'];
	return sleepSimulateServerDelay(1000).then(() => {
		if (textAry.includes(values.title)) {
			throw { title: `${values.title} is invalid word.` }
		}
	})
}

export default asyncValidate;