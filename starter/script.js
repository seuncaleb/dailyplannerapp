$(document).ready(function(){

    // variable that keeps track of time of the day 
let timeOfDay = [
    {time: "12",
meridian: "am",
reminder: ""},

{time: "13",
meridian: "pm",
reminder: ""},

{time: "14",
meridian: "pm",
reminder: ""},

{time: "15",
meridian: "pm",
reminder: ""},

{time: "16",
meridian: "pm",
reminder: ""},

{time: "17",
meridian: "pm",
reminder: ""},

{time: "18",
meridian: "pm",
reminder: ""},

{time: "19",
meridian: "pm",
reminder: ""},

{time: "20",
meridian: "pm",
reminder: ""},
]

// get time of the current date fot the header 

$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));


// display time a save button and allow a text area to type in reminders 

    timeOfDay.forEach(function(time){
        
        //timeblock row
        var rowHour = $("<form>").attr("class", "row");
        $(".container").append(rowHour);

   //time fields

var timeSpace = $("<div>");
timeSpace.text(`${time.time}${time.meridian}`)
timeSpace.attr( "class", "col-md-2 hour");


//schedule data 

var hourPlan = $("<div>");
hourPlan.attr("class", "col-md-9 description p-0");

var reminderData = $("<textarea>");
hourPlan.append(reminderData);

reminderData.attr("id", time.time);
reminderData.css('width', '100%')

if (time.time < moment().format("HH")) {
reminderData.attr ("class", "past")

} else if (time.time === moment().format("HH")) {
reminderData.attr("class", "present")

} else if (time.time > moment().format("HH")) {
reminderData.attr("class", "future ")
}


// savebutton 

var saveBt = $("<i class='far fa-save fa-lg'></i>")
var saveReminder = $("<button>");
   saveReminder.attr("class", "col-md-1 saveBtn");
saveReminder.append(saveBt);

rowHour.append(timeSpace, hourPlan, saveReminder);















});













})