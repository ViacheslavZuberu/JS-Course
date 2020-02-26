var hours = +prompt("Hours");
var minutes = +prompt("Minutes");

const MINUTES_IN_DAY = 24 * 60;

var userMinutes = hours * 60 + minutes;

var resultMinutes = MINUTES_IN_DAY - userMinutes;

var resultHours = (resultMinutes - (resultMinutes % 60)) / 60;

resultMinutes %= 60;

document.write(resultHours + ":" + resultMinutes);