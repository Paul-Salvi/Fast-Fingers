import React, { useState, useEffect, useRef } from 'react';
import "./TimerDisplay.css";
import CircularCountdown from "../CircularCountdown/CircularCountdown";

function TimerDisplay({ duration }) {
   return ( 
          
         <CircularCountdown
            duration={duration}>
         </CircularCountdown>     
   );
}


export default TimerDisplay;