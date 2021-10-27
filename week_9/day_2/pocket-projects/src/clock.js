import { htmlGenerator } from "./warmup";

export class Clock {
  constructor(container) {
    this.container = container;
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
    let time = this.container.querySelector('p:last-child')
    if (time) time.remove();
    htmlGenerator(timeString, this.container);
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