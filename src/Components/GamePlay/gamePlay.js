import React from 'react';
import { useHistory } from "react-router-dom";
import { PlayerInfo } from '../Common/playerData'
import { ScoreBoard  } from '../ScoreBoard/ScoreBoard'
import { ScoreInfo } from '../ScoreBoard/ScoreInfo'
import WordsDisplay from './wordsDisplay';
import './gamePlay.css'
import Utils from '../../Utils/GameService';


function GamePlay() {
   let history = useHistory(); 
   const handleStopGame = (event) => {
      Utils.saveUserScore(Utils.getTotalDuration());
      history.push(Utils.REDIRECT_TO_EXIST);
      return;
   }

   const userData = Utils.getUserSession();
   if (!userData.userName) {
      history.push(Utils.REDIRECT_TO_LOGIN);
      return;
   }


   return (


      <div className="game-play">
         <div className="row center">
            <div className="col-sm-4">
               <div className="row">
                  <PlayerInfo />
               </div>
               <div className="row">
                  <ScoreBoard />
               </div>
               <div>
                  <button onClick={handleStopGame} >STOP GAME </button>
               </div>
            </div>
            <div className="col-sm-4">
               <WordsDisplay />
            </div>
            <div className="col-sm-4">
               <ScoreInfo />
            </div>
         </div>
      </div>


   );
}


export default GamePlay;