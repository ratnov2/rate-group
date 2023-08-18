export const getTimeRemaining = (e: any) => {
	const total = Date.parse(e) - Date.parse(String(new Date()))
	const seconds = Math.floor((total / 1000) % 60)
	const minutes = Math.floor((total / 1000 / 60) % 60)
	const hours = Math.floor((total / 1000 / 60 / 60) % 24)
	return {
		total,
		hours,
		minutes,
		seconds
	}
}

export const startTimer = (e: any,setTimer:any) => {
	let { total, hours, minutes, seconds } = getTimeRemaining(e)
	if (total >= 0) {
		// update the timer
		// check if less than 10 then we need to
		// add '0' at the beginning of the variable
		setTimer(
			(hours > 9 ? hours : '0' + hours) +
				':' +
				(minutes > 9 ? minutes : '0' + minutes) +
				':' +
				(seconds > 9 ? seconds : '0' + seconds)
		)
	}
}