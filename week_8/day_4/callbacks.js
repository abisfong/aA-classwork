const readline = require("readline");
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
    this.hours = this.time.getHours();
    this.minutes = this.time.getMinutes();
    this.seconds = this.time.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

// const clock = new Clock();

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0)
    reader.question("Input number: ", function (answer) {
      sum += parseInt(answer);
      completionCallback(sum);
      addNumbers(sum, --numsLeft, completionCallback);
    });
  else {
    completionCallback(sum);
    reader.close();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));