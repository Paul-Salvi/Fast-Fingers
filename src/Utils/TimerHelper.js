
const TimerHelper = { 

  milliSecsToTime : (duration) => {

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

  }

}

export default TimerHelper