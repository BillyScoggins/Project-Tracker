

$(function () {

  // $(".saveBtn").click(function () {

  //   console.log($(this).parent())
  // });

  function timeTracker() {
    var currentTime = dayjs().format("dddd");
    console.log(currentTime);

    var currentMonth = dayjs().format("MMMM");
    var currentDate = dayjs().format("DD");
    var currentYear = dayjs().format("YYYY");


    $("#currentDay").text(currentTime+",");
    $("#currentMonth").text(currentMonth);
    $("#currentDate").text(currentDate+",");
    $("#currentYear").text(currentYear);


  }

  timeTracker()

  var hour;
  function highliter() {
    hour = dayjs().hour();
    console.log(hour)
  }


  $(".time-block").each(function () {
    hour = dayjs().hour();
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
  highliter();
});

for (var i = 9; i <= 18; i++) {
  var savedAppointment = localStorage.getItem("appointment" + (i));
  if (savedAppointment !== null); {
    $("#" + (i)).text(savedAppointment);

  }

}

$(".saveBtn").click(function () {
  console.log($(this).siblings("description").val())

  var saved = $(this).siblings(".description").val();
  var savedKey = $(this).parent().attr("id");

  localStorage.setItem(savedKey, saved)

})

$("#hour-14 .description").val(localStorage.getItem("hour-14"));

