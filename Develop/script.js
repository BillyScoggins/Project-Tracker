// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  $(".saveBtn").click(function () {

    console.log($(this).parent())
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?



  function timeTracker() {
    var currentTime = dayjs().format("dddd");
    console.log(currentTime);

    var currentMonth = dayjs().format("MMMM");
    var currentDate = dayjs().format("DD");
    var currentYear = dayjs().format("YYYY");


    //  jquery loops specifically .each() method
    //in this loop yoou lop over all the .timeblock classes so computer has acess to all time blocks 
    //identify each time block in a new variable representing specific the hour in the time block 
    // specific block hour is same as curretn time then we are in future class, if block hour is before current time we are in future etc... 
    // create an if statment that changes the classes based on the line above with addclass() and remove class() jquery methods
    $("#currentDay").text(currentTime);
    $("#currentMonth").text(currentMonth);
    $("#currentDate").text(currentDate);
    $("#currentYear").text(currentYear);


  }

  timeTracker()
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page    

function highliter() {
  var hour = dayjs().hour();
  console.log(hour)



  $(".time-block").each(function () {
    var current = parseInt($(this).attr('id').split('-')[1]);

    if (current > hour) {
      $(this).addClass("future");

    } else if (current < hour) {
      $(this).addClass("past");
    }

    else {
      $(this).addClass("present");

    }
  });
}
highliter()


});