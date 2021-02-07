import React, { useState, useEffect } from 'react';
import Utils from '../../Utils/GameService';
import TimerService from '../GamePlay/TimerService';


function ScoreInfo() {
   let [totalMs, setTotalMs] = useState(0);
   let [totalDuration, setTotalDuration] = useState(TimerService.milliSecsToTime(0));

   const updateTotalScore = (ms) => {
      const duration = TimerService.milliSecsToTime(ms);      
      Utils.updateTotalDuration(`${duration.minutes}.${duration.seconds}.${duration.seconds}`);
      setTotalDuration(duration);
      setTotalMs(ms);
   }

   useEffect(() => {
      const timer = setInterval(() => updateTotalScore(totalMs + 10), 10);
      return () => clearInterval(timer);
   }, [totalMs]);

   return (
      <div>
         <p>FAST FINGERS </p>
         <p>SCORE  {totalDuration.minutes}.{totalDuration.seconds}.{totalDuration.milliseconds} </p>
      </div>
   );
}


export { ScoreInfo };