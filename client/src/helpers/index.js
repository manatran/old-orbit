module.exports = {
	capitalizeFirstLetter: (string) => {
  	return string.charAt(0).toUpperCase() + string.slice(1);
	},
  isEmpty: value => {
    return (
      value === undefined ||
      value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
    );
	},
	formatDate: (date) => {
		date = new Date(date);
		const day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();

		return `${day}-${month}-${year}`;
	},
  getTimeDifference: datetime => {
    datetime =
      typeof datetime !== "undefined" ? datetime : "2014-01-01 01:02:03.123456";

    datetime = new Date(datetime).getTime();
    var now = new Date().getTime();

    if (isNaN(datetime)) {
      return "";
    }

    var milisec_diff = "";
    if (datetime < now) {
      milisec_diff = now - datetime;
    } else {
      milisec_diff = datetime - now;
    }

    var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));
    var date_diff = new Date(milisec_diff);
    if (days < 1) return `${date_diff.getHours()} hours ago`;
    if (days >= 1) return `${days} days ago`;
  }
};
