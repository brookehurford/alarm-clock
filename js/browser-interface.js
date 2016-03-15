// var displayTime = require('./../js/clock-interface.js');

$(document).ready(function() {
  function displayTime() {
    $('#time').text(moment().format("HH:mm:ss A"));
  }
  setInterval(displayTime, 1000);

  $("form.setAlarm").submit(function(event){
    event.preventDefault();
    var timeInput = $("input.alarmTime").val();

    $("ul#alarmList").append("<li>" + timeInput + "</li>");
  });
});
