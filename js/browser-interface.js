// var displayTime = require('./../js/clock-interface.js');

$(document).ready(function() {
  function displayTime() {
    $('#time').text(moment());
  }
  setInterval(displayTime, 1000);
});
