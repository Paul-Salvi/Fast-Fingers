import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import WordManager from '../../Utils/WordManager'
import Utils from '../../Utils/GameService';
import TimerService from "./TimerService"


function WordsDisplay() {

   let totalNewWords = 0;
   let history = useHistory();
   let wordMgr = new WordManager();
   const defaultTimeOutInMs = Utils.getGameTimeout();
   const defaultTimeoutDuration = TimerService.milliSecsToTime(defaultTimeOutInMs);

   const getNewWord = () => {
      Utils.saveTotalNewWords(totalNewWords += 1);
      //Utils.updateGameDifficultyFactor(parseInt(1) * 0.01);
      return wordMgr.getWord(Utils.getUserSession().difficultyLevel).toLocaleUpperCase();
   }

   let [newWord, setNewWord] = useState(getNewWord());
   let [pendingTimeInMs, setPendingTimeInMs] = useState(defaultTimeOutInMs);
   let [pendingDuration, setPendingDuration] = useState(defaultTimeoutDuration);



   const handleTimeOut = () => {
      Utils.saveUserScore(Utils.getTotalDuration());
      history.push(Utils.REDIRECT_TO_EXIST);
      return;
   }
   const updateTimeOutDisplay = (time) => {
      setPendingDuration(TimerService.milliSecsToTime(time));
      setPendingTimeInMs(time);
   }

   const handleWordChange = (event) => {
      if (newWord === event.target.value.toLocaleUpperCase()) {
         setNewWord(getNewWord());
         var currentDiffFactor = Utils.getGameDifficultyFactor();
         Utils.updateGameDifficultyFactor(currentDiffFactor + 0.01);
         event.target.value = "";
         setPendingTimeInMs(defaultTimeOutInMs);
      }
   }

   useEffect(() => {
      const timer = pendingTimeInMs > 0 && setInterval(() => updateTimeOutDisplay(pendingTimeInMs - 10), 1);
      if (pendingTimeInMs === 0) {
         handleTimeOut();
      }
      return () => clearInterval(timer);
   }, [pendingTimeInMs]);


   return (

      <div className="col-sm-4">
         <div>
            <div className="row">
            </div>
            <div className="row">
               <div className="timer-display">
                  Time : {pendingDuration.seconds} : {pendingDuration.milliseconds}
               </div>
            </div>
            <div className="row">
               <div id="word-display" className="word-display">
                  {newWord}
               </div>
            </div>
            <div className="row">
               <input autoFocus onChange={handleWordChange} className="word-input" />
            </div>
         </div>
      </div>


   );
}


export default WordsDisplay;