var displayTime = require('./../js/clock-interface.js');

$(document).ready(function() {
  $('#time').text(moment().format("HH:mm"));

  $("form.setAlarm").submit(function(event){
    event.preventDefault();
    var timeInput = $("input.alarmTime").val();

    $("ul#alarmList").append("<li class='alarmItem'>" + timeInput + "</li>");
    console.log(timeInput);

    $(".setAlarm")[0].reset();

    return timeInput;
  });
});
