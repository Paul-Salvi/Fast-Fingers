import TimerHelper from "./TimerHelper";

const keyUserName = "userName";
const keyGameScores = "gameScores";
const keyDifficultyLevel = "difficultyLevel";
const defaultDifficultyLevel = "EASY";
const keyGameDuration = "gameDuration";
const keyTotalNewWords = "totalNewWords";
const keyGameDifficultyFactor = "gameDifficultyFactor";
const keyLevelEasy = "EASY";
const keyLevelMedium = "MEDIUM";
const keyLevelHard = "HARD";
const incrementFactorVal = 0.01;

const DIFFICULTY_LEVELS = {
   'EASY': 1,
   'MEDIUM': 1.5,
   'HARD': 2
}
const Utils = {

   getUserScores: () => {
      let scores = sessionStorage.getItem(keyGameScores) ?? [];
      if (scores.length > 0) {
         const arrScores = JSON.parse(scores);
         return arrScores.slice(Math.max(arrScores.length - 5, 0))
      }
   },

   saveUserScore: (presentScore) => {
      let scores = JSON.parse(sessionStorage.getItem(keyGameScores)) ?? [];
      scores.push(presentScore);
      sessionStorage.setItem(keyGameScores, JSON.stringify(scores));
   },
   saveTotalNewWords: (count) => {
      sessionStorage.setItem(keyTotalNewWords, count);
   },
   getTotalNewWords: () => {
      return sessionStorage.getItem(keyTotalNewWords);
   },

   saveUserSession: (userName, difficultyLevel) => {
      if (difficultyLevel.length <= 0) {
         difficultyLevel = defaultDifficultyLevel;
      }
      sessionStorage.clear();
      sessionStorage.setItem(keyUserName, userName);
      sessionStorage.setItem(keyDifficultyLevel, difficultyLevel);
      sessionStorage.setItem(keyGameDifficultyFactor, DIFFICULTY_LEVELS[difficultyLevel]);

   },

   getUserSession: () => ({
      userName: sessionStorage.getItem(keyUserName),
      difficultyLevel: sessionStorage.getItem(keyDifficultyLevel)
   }),

   getGameTimeout: (difficultyLevel) => {
      return 4000;
   },

   getGameDifficultyFactor: () => {
      return parseFloat(sessionStorage.getItem(keyGameDifficultyFactor));
   },


   updateGameDifficultyFactor: (difficultyFactor) => {
      const currentDifficultyFactor = parseFloat(difficultyFactor);
      console.log(difficultyFactor);
      if (currentDifficultyFactor >= DIFFICULTY_LEVELS[keyLevelEasy] && currentDifficultyFactor < DIFFICULTY_LEVELS[keyLevelMedium]) {
         console.log(keyLevelEasy);
         sessionStorage.setItem(keyDifficultyLevel, keyLevelEasy);
      } else if (currentDifficultyFactor >= DIFFICULTY_LEVELS[keyLevelMedium] && currentDifficultyFactor <= DIFFICULTY_LEVELS[keyLevelHard]) {
         sessionStorage.setItem(keyDifficultyLevel, keyLevelMedium);
         console.log(keyLevelMedium);
      } else {
         sessionStorage.setItem(keyDifficultyLevel, keyLevelHard);
         console.log(keyLevelHard);
      }
      sessionStorage.setItem(keyGameDifficultyFactor, difficultyFactor);
   },

   updateTotalDuration: (duration) => {
      sessionStorage.setItem(keyGameDuration, duration);
   },
   getTotalDuration: () => {
      return sessionStorage.getItem(keyGameDuration);
   },

   getMaxScore: (scores) => {
      var data = scores.map( score => { return TimerHelper.durationToMilliSec(score)  } );
      var mx = Math.max(...data);
      return  TimerHelper.milliSecsToTime(mx);
   },

   REDIRECT_TO_LOGIN: {
      pathname: '/'
   },
   REDIRECT_TO_EXIST: {
      pathname: '/gameover'
   },
   REDIRECT_TO_GAME: {
      pathname: '/gameplay'
   }

}

export default Utils;