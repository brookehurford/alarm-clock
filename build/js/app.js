(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/clock-interface.js":1}]},{},[2]);
