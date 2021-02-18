import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { PlayerInfo } from '../PlayerInfo/PlayerInfo'
import { ScoreBoard } from '../ScoreBoard/ScoreBoard'
import { ScoreInfo } from '../ScoreInfo/ScoreInfo'
import WordsDisplay from '../WordsDisplay/WordDisplay';
import TimerDisplay from '../TimerDisplay/TimerDisplay';
import './GamePlay.css'
import Utils from '../../Utils/GameService';
import Button from '../Common/Button/Button';
import TextBox from '../Common/TextBox/TextBox';
import crossIcon from '../../public/icons/cross-icon.svg';
import TimerService from "../../Utils/TimerService";
import WordManager from '../../Utils/WordManager';

function GamePlay() {

   let totalNewWords = 0;
   const defaultTimeOutInMs = Utils.getGameTimeout();
   const defaultTimeoutDuration = TimerService.milliSecsToTime(defaultTimeOutInMs);
   let [pendingTimeInMs, setPendingTimeInMs] = useState(defaultTimeOutInMs);
   let [pendingDuration, setPendingDuration] = useState(defaultTimeoutDuration);
   let wordMgr = new WordManager();
   let [typedText, setTypedText] = useState('');

   const getNewWord = () => {
      Utils.saveTotalNewWords(totalNewWords += 1);
      //Utils.updateGameDifficultyFactor(parseInt(1) * 0.01);
      return wordMgr.getWord(Utils.getUserSession().difficultyLevel).toLocaleUpperCase();
   }
   let [newWord, setNewWord] = useState(getNewWord());


   const updateTimeOutDisplay = (time) => {
      setPendingDuration(TimerService.milliSecsToTime(time));
      setPendingTimeInMs(time);
   }

   const handleTimeOut = () => {
      Utils.saveUserScore(Utils.getTotalDuration());
      //history.push(Utils.REDIRECT_TO_EXIST);
      return;
   }

   const handleWordChange = (event) => {
      setTypedText(event.target.value.toLocaleUpperCase());
      if (newWord === event.target.value.toLocaleUpperCase()) {
         setNewWord(getNewWord());
         setTypedText("");
         var currentDiffFactor = Utils.getGameDifficultyFactor();
         Utils.updateGameDifficultyFactor(currentDiffFactor + 0.01);
         event.target.value = "";
         setPendingTimeInMs(defaultTimeOutInMs);
      }
   }


   useEffect(() => {
      const timer = pendingTimeInMs > 0 && setInterval(() => updateTimeOutDisplay(pendingTimeInMs - 40), 10);
      if (pendingTimeInMs === 0) {
         handleTimeOut();
      }
      return () => clearInterval(timer);
   }, [pendingTimeInMs]);


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


      <div className="gamePlay">
         <div className="row">
            <div className="col-sm-3">

               <PlayerInfo />
               <ScoreBoard />
               <Button
                  icon={crossIcon}
                  text="STOP GAME"
                  onClick={handleStopGame} >
               </Button>

            </div>
            <div className="col-sm-1"></div>
            <div className="col-sm-4 center">
               <div className="">
                  <TimerDisplay
                     duration={pendingDuration} >
                  </TimerDisplay>
                  <WordsDisplay
                     word={newWord}
                     typedText={typedText} >
                  </WordsDisplay>
                  <TextBox
                     textAlign="center"
                     onChange={handleWordChange} >
                  </TextBox>
               </div>
            </div>
            <div className="col-sm-4">
               <ScoreInfo />
            </div>
         </div>
      </div>


   );
}


export default GamePlay;