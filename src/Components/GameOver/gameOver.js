import React from 'react';
import { useHistory } from "react-router-dom";
import Utils from '../../Utils/GameService';
import { PlayerInfo } from '../PlayerInfo/PlayerInfo'
import Button from '../Common/Button/Button';
import crossIcon from '../../public/icons/cross-icon.svg';
import reloadIcon from '../../public/icons/reload-icon.svg';
import Text from '../Common/Text/Text'
import './GameOver.css';

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
    <div className="row">
      <div className="col-sm-4">
        <PlayerInfo />

        <div>
          <Button
            icon={crossIcon}
            text="QUIT"
            onClick={handleQuit} >
          </Button>
        </div>
      </div>

      <div className="col-sm-4 " >
        <div className="scoreContainer" >
          <Text
            text={"SCORE : GAME " + scores.length}>
          </Text>
        </div>
        <div className="score">
          {latestScore}
          {latestScore >= maxScore &&
            <div> New High Score </div>
          }
        </div>
        <div>
          <Button
            icon={reloadIcon}
            text="PLAY AGAIN"
            onClick={handlePlayAgain} >
          </Button>
        </div>
      </div>
      <div className="col-sm-4">
        <Text
          text="Fast Fingers">
        </Text>
      </div>
    </div>
  );
}


export default GameOver;