import React, { useState, useEffect } from 'react';
import Utils from '../../Utils/GameService';
import './ScoreBoard.css';

function ScoreBoard() {
   const scores = Utils.getUserScores();
   return (
      <div className="ScoreBoard">
         <div className="scoreBoardHeader">
            <p>SCORE BOARD</p>
         </div>
         <div className="scoresContainer">
            <ul className = "scores">
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