var displayTime = require('./../js/clock-interface.js').displayTime;

$(document).ready(function() {
  $('#time').text(moment().format("HH:mm"));
  setInterval(displayTime, 1000);

  $("form.setAlarm").submit(function(event){
    event.preventDefault();
    var timeInput = $("input.alarmTime").val();
    $("ul#alarmList").append("<li>" + timeInput + "</li>");
    setInterval(function(){
      var currentTime = moment().format("HH:mm");
      console.log(currentTime);
      console.log(timeInput);
      if (currentTime === timeInput) {
        alert("Your alarm is going off!");
      }
    }, 1000);
    $(".setAlarm")[0].reset();
  });
});
