module.exports = {
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
