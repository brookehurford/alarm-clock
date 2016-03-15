function displayTime() {
  var now = moment().format("HH:mm");
  var alarm = parseInt($('.alarmItem').val());
  if (now === alarm) {
    alert("hi");
  }
}
// setInterval(displayTime, 1000);

// function Clock (time, alarm) {
//   this.time = time;
//   this.alarm = alarm;
// }
//
// Clock.prototype.displayTime = function() {
//   var now = moment().format("HH:mm");
// }
//
// setInterval(displayTime, 1000);
