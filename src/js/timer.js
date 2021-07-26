class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const timeTarget = this.targetDate.getTime();
    const timerRef = document.querySelector(this.selector);
    const arrayOfSpans = timerRef.querySelectorAll('.value');;
    const intervalId = setInterval(function makeTimer() {
      const time = timeTarget - Date.now();
      if (time <= 0) {
      clearInterval(intervalId);
      return;
    }
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);
      const arrayOfTimes = [days, hours, mins, secs];
      arrayOfSpans.forEach((span, i) => span.textContent = arrayOfTimes[i])
  }, 1000);
  }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 1, 2021'),
});

timer.start();