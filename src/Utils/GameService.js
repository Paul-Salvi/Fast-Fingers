const keyUserName = "userName";
const keyGameScores = "gameScores";
const keyDifficultyLevel = "difficultyLevel";
const defaultDifficultyLevel = "EASY";
const keyGameDuration = "gameDuration";
const keyTotalNewWords = "totalNewWords";

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
   },

   getUserSession: () => ({
      userName: sessionStorage.getItem(keyUserName),
      difficultyLevel: sessionStorage.getItem(keyDifficultyLevel)
   }),

   getGameTimeout: (difficultyLevel) => {
      return 4000;
   },


   updateTotalDuration: (duration) => {
      sessionStorage.setItem(keyGameDuration, duration);
   },
   getTotalDuration: () => {
      return sessionStorage.getItem(keyGameDuration);
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