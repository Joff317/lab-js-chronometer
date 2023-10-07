class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (typeof printTimeCallback === "function") {
        printTimeCallback(this.currentTime);
      }
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    return clearInterval(this.intervalId);
  }

  reset() {
    return (this.currentTime = 0);
  }

  split() {
    const minute = this.computeTwoDigitNumber(this.getMinutes());
    const seconde = this.computeTwoDigitNumber(this.getSeconds());
    return `${minute}:${seconde}`;
  }
}

const chronometerOne = new Chronometer();
// chronometer.split()
