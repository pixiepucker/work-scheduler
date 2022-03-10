//display current date in header
var currentDate = moment().format("ddd, MMMM Do, YYYY, HH:mm:ss");
$("#currentDay").append(currentDate);

//get current time with hours
var currentTime = moment().format('HH');

//save to localStorage through .saveBtn setItem
$('.saveBtn').on('click', function(event) {
    //prevent default browser action
    event.preventDefault();
    //create vars to hold info from textarea and time block, use .siblings to grab elements
    var eventText = $(this).siblings('.task').val();
    var eventTime = $(this).siblings('.hour').text();

    //set values to localStorage
    localStorage.setItem(eventTime, JSON.stringify(eventText));
});

//load items through localStorage getItem, use id on top-level div and id on textarea
function loadEvents () {
    //create var to hold parsed string attached to 0900 div
    var eventHour1 = JSON.parse(localStorage.getItem('0900'));
    //pass event... var into .val to load in according to time div ex. 0900 1000 etc.
    $('#first').val(eventHour1);

    var eventHour2 = JSON.parse(localStorage.getItem('1000'));
    $('#second').val(eventHour2);

    var eventHour3 = JSON.parse(localStorage.getItem('1100'));
    $('#third').val(eventHour3);

    var eventHour4 = JSON.parse(localStorage.getItem('1200'));
    $('#fourth').val(eventHour4);

    var eventHour5 = JSON.parse(localStorage.getItem('1300'));
    $('#fifth').val(eventHour5);

    var eventHour6 = JSON.parse(localStorage.getItem('1400'));
    $('#sixth').val(eventHour6);

    var eventHour7 = JSON.parse(localStorage.getItem('1500'));
    $('#seventh').val(eventHour7);

    var eventHour8 = JSON.parse(localStorage.getItem('1600'));
    $('#eighth').val(eventHour8);

    var eventHour9 = JSON.parse(localStorage.getItem('1700'));
    $('#ninth').val(eventHour9);

};
//call function to load in events
loadEvents();












































//apply color to timeblocks based on time
// var timeBlocks = function () {
//     //create var to hold current time
//     var time = moment();
    
//     //set data for each div to equal time & hour
//     var dataArr = [
//         $('#hour1').data('time',9),
//         $('#hour2').data('time',10),
//         $('#hour3').data('time',11),
//         $('#hour4').data('time',12),
//         $('#hour5').data('time',13),
//         $('#hour6').data('time',14),
//         $('#hour7').data('time',15),
//         $('#hour8').data('time',16),
//         $('#hour9').data('time',17),
//     ]  
//     console.log(dataArr);

//     for (var i = 0; i < dataArr.length; i++) {
//         if (time < $('#hour1').data-time) {
//             $('#hour1').addClass = ('future');
//         } else if (time > $('#hour1').data-time) {
//             $('#hour1').addClass = ('past');
//         } else {
//             $('#hour1').addClass = ('present');
//         }
//     }
// };

// timeBlocks();