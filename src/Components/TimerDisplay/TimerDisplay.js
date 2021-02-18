import React, { useState, useEffect, useRef } from 'react';
import "./TimerDisplay.css";
import CircularCountdown from "../CircularCountdown/CircularCountdown";

function TimerDisplay({ duration }) {
   return (
      <div>
         <CircularCountdown
            duration={duration}>
         </CircularCountdown>
      </div>
   );
}


export default TimerDisplay;