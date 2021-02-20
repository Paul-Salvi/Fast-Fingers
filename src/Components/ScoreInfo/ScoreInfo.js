import React, { useState, useEffect } from 'react';
import Utils from '../../Utils/GameService';
import TimerHelper from '../../Utils/TimerHelper';
import './ScoreInfo.css'


function ScoreInfo() {

   let [totalMs, setTotalMs] = useState(0);
   let [totalDuration, setTotalDuration] = useState(TimerHelper.milliSecsToTime(0));
   const updateTotalScore = (ms) => {
      const duration = TimerHelper.milliSecsToTime(ms);
      Utils.updateTotalDuration(`${duration.minutes}.${duration.seconds}.${duration.seconds}`);
      setTotalDuration(duration);
      setTotalMs(ms);
   }

   useEffect(() => {
      const timer = setInterval(() => updateTotalScore(totalMs + 1000), 1000);
      return () => clearInterval(timer);
   }, [totalMs]);

   return (
      <div className= "scoreInfo">
         <p>FAST FINGERS </p>
         <p>SCORE  : {totalDuration.minutes}.{totalDuration.seconds} </p>
      </div>
   );
}


export { ScoreInfo };