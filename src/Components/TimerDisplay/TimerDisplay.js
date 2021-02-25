import React, { useState, useEffect, useRef } from 'react';
import "./TimerDisplay.css";
import CircularCountdown from "../CircularCountdown/CircularCountdown";

function TimerDisplay({ duration, countdownPercent }) {
   return (

      <CircularCountdown
         duration={duration}
         percent={countdownPercent} >
      </CircularCountdown>
   );
}


export default TimerDisplay;