var timedEvents = {};

//display current date in header
var currentDate = moment().format("ddd, MMMM Do, YYYY, HH:mm:ss");
$("#currentDay").append(currentDate);

//create var to set time for each hour
//apply color to timeblocks based on time
