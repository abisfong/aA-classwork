// const logName = function () {
//   console.log("Name");
// }

// setInterval(logName, 1000); => runs every second

// function fn() {
//   console.log(this);
// }
// fn();

"use strict";


// let name ConstructorFn = function(name) {
//   this.name = name;
// }

// ConstructorFn.prototype.printTime = function () {
// }

class Clock {
  constructor() {
    // 1. Create a Date object.
    this.time = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.updateTime()
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    let timeString = '' 
    this.updateTime()
    timeString += this.hours < 10 ? '0' + this.hours : this.hours;
    timeString  += ':';
    timeString += this.minutes < 10 ? '0' + this.minutes : this.minutes;
    timeString += ':';
    timeString += this.seconds < 10 ? '0' + this.seconds : this.seconds;
    // Use console.log to print it.
    console.log(timeString);
  }

  _tick() {
    // 1. Increment the time by one second.
    this.time = new Date(this.time.getTime() + 1000);
    // 2. Call printTime.
    this.printTime();
  }

  updateTime() {
    this.hours = this.time.getHours();
    this.minutes = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
  }
}

const clock = new Clock();