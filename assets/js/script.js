//display current date in header
var currentDate = moment().format("ddd, MMMM Do, YYYY, HH:mm:ss");
$("#currentDay").append(currentDate);

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
    $('#09').val(eventHour1);

    var eventHour2 = JSON.parse(localStorage.getItem('1000'));
    $('#10').val(eventHour2);

    var eventHour3 = JSON.parse(localStorage.getItem('1100'));
    $('#11').val(eventHour3);

    var eventHour4 = JSON.parse(localStorage.getItem('1200'));
    $('#12').val(eventHour4);

    var eventHour5 = JSON.parse(localStorage.getItem('1300'));
    $('#13').val(eventHour5);

    var eventHour6 = JSON.parse(localStorage.getItem('1400'));
    $('#14').val(eventHour6);

    var eventHour7 = JSON.parse(localStorage.getItem('1500'));
    $('#15').val(eventHour7);

    var eventHour8 = JSON.parse(localStorage.getItem('1600'));
    $('#16').val(eventHour8);

    var eventHour9 = JSON.parse(localStorage.getItem('1700'));
    $('#17').val(eventHour9);

};
//call function to load in events
loadEvents();

//create loop to go over time blocks and compare to time
//use jquery .each inside of .ready function to loop/run once page is loaded
$(document).ready (function() {
    //get current time with hours
    var currentTime = moment().hours();

    $('.task').each(function() {
        //var that holds parsed integer/(textarea)'s id (changed to numbers from strings)
        var eventTime = parseInt($(this).attr('id'));
        //for my sanity, check if function works
        console.log('this function works!')
        //use if statement to compare var eventTime with currentTime
        //remove classes if conditions are/aren't met
        if(currentTime > eventTime) {
            //class past active
            $(this).addClass('past');
        } else if(currentTime === eventTime) {
            //class present active
            $(this).addClass('present');
            $(this).removeClass('past');
        } else if(currentTime < eventTime) {
            //class future active
            $(this).addClass('future');
            $(this).removeClass('past');
            $(this).removeClass('present');
        }
    });
});