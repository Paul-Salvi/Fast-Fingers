import React, { useState, useEffect } from 'react';
import Utils from '../../Utils/GameService';


function ScoreBoard() {
   const scores = Utils.getUserScores();
   return (
      <div>
         <div>
            <p>Score Board</p>
         </div>
         <div>
            <ul>
               {scores &&
                  scores.map((score, indx) => (
                     <li key={score}>Game {indx + 1}: {score}</li>
                  ))
               }
            </ul>
         </div>
      </div>
   );
}

export { ScoreBoard };