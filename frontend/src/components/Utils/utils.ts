export const formatDate = (date: string) => {
    let localDate = new Date(date).toLocaleString("en-US");
	let index = localDate.indexOf(",");
	let newDateFormat = new Date(localDate.slice(0, index).trim())
		.toDateString()
		.slice(4);
	let formattedDate = [newDateFormat, localDate.slice(index + 1)].join().trim();
	return formattedDate;

}
