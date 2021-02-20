
const TimerHelper = {

  milliSecsToTime: (duration) => {

    let milliseconds = parseInt((duration % 1000));
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    milliseconds = milliseconds.toString().padStart(3, '0');

    return {
      hours,
      minutes,
      seconds,
      milliseconds
    };
  },

  durationToMilliSec: (duration) => {
    let totalMilliSec = 0;
    var arr = duration.split('.');
    const minutes = parseInt(arr[0]);
    const seconds = parseInt(arr[1]);
    const milliSecs = parseInt(arr[2]);
    totalMilliSec = milliSecs;
    totalMilliSec += minutes * (1000 * 60);
    totalMilliSec += seconds * 1000;       
    return totalMilliSec;
  }
}

export default TimerHelper