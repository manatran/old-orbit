module.exports = {
	currentYear: () => new Date().getFullYear(),
	currentMonth: () => {
		const months = [
			'jan',
			'feb',
			'mar',
			'apr',
			'may',
			'jun',
			'jul',
			'aug',
			'sep',
			'oct',
			'nov',
			'dec'
		]
		const currMonth = new Date().getMonth();
		return months[currMonth];
	}
};
