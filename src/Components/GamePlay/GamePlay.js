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
import TimerHelper from "../../Utils/TimerHelper";
import WordManager from '../../Utils/WordManager';
import { Row, Col } from 'react-bootstrap';

function GamePlay() {

   const defaultTimeOutInMs = Utils.getGameTimeout();
   const defaultTimeoutDuration = TimerHelper.milliSecsToTime(defaultTimeOutInMs);
   const [pendingTimeInMs, setPendingTimeInMs] = useState(defaultTimeOutInMs);
   const [pendingDuration, setPendingDuration] = useState(defaultTimeoutDuration);
   const wordMgr = new WordManager();
   const [typedText, setTypedText] = useState('');
   const [wordCount, setWordCount] = useState(0);

   const getNewWord = () => {        
      return wordMgr.getWord(Utils.getUserSession().difficultyLevel).toLocaleUpperCase();
   }
   let [newWord, setNewWord] = useState(getNewWord());


   const updateTimeOutDisplay = (time) => {
      setPendingDuration(TimerHelper.milliSecsToTime(time));
      setPendingTimeInMs(time);
   }

   const handleTimeOut = () => {    
      if (wordCount > 1) {
         Utils.saveUserScore(Utils.getTotalDuration());
      }
      history.push(Utils.REDIRECT_TO_EXIST);
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
         setWordCount(wordCount +1);
         Utils.saveTotalNewWords(wordCount);
      }
   }


   useEffect(() => {
      const timer = pendingTimeInMs > 0 && setInterval(() => updateTimeOutDisplay(pendingTimeInMs - 40), 10);
      if (pendingTimeInMs <= 0) {
         updateTimeOutDisplay(0);
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

      <Row>
         <Col md={3} >
            <PlayerInfo />
            <ScoreBoard />
            <Button
               icon={crossIcon}
               text="STOP GAME"
               onClick={handleStopGame} >
            </Button>
         </Col>
         <Col md={6}>
            <div className="center">
               <TimerDisplay
                  duration={pendingDuration} >
               </TimerDisplay>
            </div>

            <WordsDisplay
               word={newWord}
               typedText={typedText} >
            </WordsDisplay>
            <TextBox
               textAlign="center"
               onChange={handleWordChange} >
            </TextBox>
         </Col>
         <Col md={3}>
            <ScoreInfo />
         </Col>
      </Row>


   );
}


export default GamePlay;