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
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);
  }

  getSeconds() {
    return Math.floor(this.currentTime / 100) % 60;
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
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
    const centiSeconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minute}:${seconde}:${centiSeconds}`;
  }
}
