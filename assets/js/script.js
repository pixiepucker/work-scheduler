var timedEvents = {};

//display current date in header
var currentDate = moment().format("ddd, MMMM Do, YYYY, HH:mm:ss");
$("#currentDay").append(currentDate);

//apply color to timeblocks based on time
var hour1 = moment().set('hour, 9');
var hour2 = moment().set('hour', 10);
var hour3 = moment().set('hour', 11);
var hour4 = moment().set('hour', 12);
var hour5 = moment().set('hour', 13);
var hour6 = moment().set('hour', 14);
var hour7 = moment().set('hour', 15);
var hour8 = moment().set('hour', 16);
var hour9 = moment().set('hour', 17);