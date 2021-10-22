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

// class Clock {
//   constructor() {
//     // 1. Create a Date object.
//     this.time = new Date();
//     // 2. Store the hours, minutes, and seconds.
//     this.updateTime()
//     // 3. Call printTime.
//     this.printTime();
//     // 4. Schedule the tick at 1 second intervals.
//     setInterval(this._tick.bind(this), 1000);
//   }

//   printTime() {
//     // Format the time in HH:MM:SS
//     let timeString = '' 
//     this.updateTime()
//     timeString += this.hours < 10 ? '0' + this.hours : this.hours;
//     timeString  += ':';
//     timeString += this.minutes < 10 ? '0' + this.minutes : this.minutes;
//     timeString += ':';
//     timeString += this.seconds < 10 ? '0' + this.seconds : this.seconds;
//     // Use console.log to print it.
//     console.log(timeString);
//   }

//   _tick() {
//     // 1. Increment the time by one second.
//     this.time = new Date(this.time.getTime() + 1000);
//     // 2. Call printTime.
//     this.printTime();
//   }

//   updateTime() {
//     this.hours = this.time.getHours();
//     this.minutes = this.time.getMinutes();
//     this.seconds = this.time.getSeconds();
//   }
// }

// // const clock = new Clock();

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft > 0)
//     reader.question("Input number: ", function (answer) {
//       sum += parseInt(answer);
//       completionCallback(sum);
//       addNumbers(sum, --numsLeft, completionCallback);
//     });
//   else {
//     completionCallback(sum);
//     reader.close();
//   }
// }

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


/**********************    absurbBubbleSort        ******************/


// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  reader.question(`Is ${el1} > ${el2}: `, function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  }) 
  // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.

  if(i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (madeSwap) {
      madeAnySwaps = madeSwap || madeAnySwaps;
      if (madeSwap === true) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      } 
      innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    })
  }

  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
