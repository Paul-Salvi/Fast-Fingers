import React from 'react';
import { useHistory } from "react-router-dom";
import Utils from '../../Utils/GameService';

function GameOver() {
  let history = useHistory();
  const scores = Utils.getUserScores() ?? [];
  const latestScore = scores[scores.length - 1] ?? 0;
  const maxScore = Math.max(...scores);

  const handlePlayAgain = (event) => {
    history.push(Utils.REDIRECT_TO_GAME);
    return;
 }
 const handleQuit = (event) => {
  history.push(Utils.REDIRECT_TO_LOGIN);
  return;
}
 

  return (
    <div>
      <div>
        SCORE : GAME {scores.length}
      </div>
      <div>
        {latestScore}
        {latestScore >= maxScore && 
        <div> New High Score </div> 
        }
        <div> <button onClick={handlePlayAgain} > PLAY AGAIN</button> </div> 
      </div>
      <div>
      <div> <button onClick={handleQuit} > Quit</button> </div> 
      </div>
    </div>
  );
}


export default GameOver;