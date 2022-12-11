
    // variable that keeps track of time of the day 
    let timeOfDay = [
        {time: "08",
    meridian: "am",
    reminder: "",
    id: "0"},
    
    {time: "09",
    meridian: "am",
    reminder: "",
    id: "1"},
    
    {time: "10",
    meridian: "am",
    reminder: "",
    id: "2"},
    
    {time: "11",
    meridian: "am",
    reminder: "",
    id: "3"},
    
    {time: "12",
    meridian: "pm",
    reminder: "",
    id: "4"},
    
    {time: "13",
    meridian: "pm",
    reminder: "",
    id: "5"},
    
    {time: "14",
    meridian: "pm",
    reminder: "",
    id: "6"},
    
    {time: "15",
    meridian: "pm",
    reminder: "",
    id: "7"},
    
    {time: "16",
    meridian: "pm",
    reminder: "",
    id: "8"},
    ]
    
    // get time of the current date fot the header 
    
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));
    
    // to save reminder in local storage
    
    function reminderStorage() {
        localStorage.setItem("timeOfDay", JSON.stringify(timeOfDay));
    }
    
    
    // to let user see data in local storage
    
    
    function showReminders() {
       timeOfDay.forEach(function (forNow) {
            $(`#${forNow.id}`).val(forNow.reminder);
        })
    }
    
    function view() {
        var storedReminder = JSON.parse(localStorage.getItem("timeOfDay"));
    
        if (storedReminder) {
            timeOfDay = storedReminder;
        }
    
        reminderStorage();
        showReminders();
    }
    
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
    
    reminderData.attr("id", time.id);
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
    
    view();
    
    
    
    console.log(localStorage)
    
    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        let reminderIndex = $(this).siblings(".description").children(".future").attr("id");
        timeOfDay[reminderIndex].reminder = $(this).siblings(".description").children(".future").val();
        reminderStorage();
        showReminders();

        

        //$('.container').append('<h3>You just added a task</h3>')
    })
    
    
    
    
    
    
    
    