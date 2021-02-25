import React, { useState, useEffect } from 'react'
import './CircularCountdown.css'

function CircularCountdown({ duration, percent }) {
   const radius = 45;
   const circumference = radius * 2 * Math.PI;
   const offset = circumference - percent / 100 * circumference;
   const dashedOffset = offset;
   const cirucumferenceStyle = { strokeDasharray: circumference + " " + circumference, strokeDashoffset: dashedOffset, fill: "transparent" };
   return (
      <div className="base-timer">
         <svg className="progress-ring" viewBox="0 0 100 100"  >
            <circle
               className="progress-ring__circle"
               style={cirucumferenceStyle}
               r={radius}
               cx="50"
               cy="50" />
         </svg>
         <span id="base-timer-label" className="base-timer__label">
            {duration.seconds}:{duration.milliseconds}
         </span>
      </div>
   );
}
export default CircularCountdown