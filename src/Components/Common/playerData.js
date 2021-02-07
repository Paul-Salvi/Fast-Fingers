import React from 'react';
import Utils from '../../Utils/GameService';

function PlayerInfo() {

   const userData = Utils.getUserSession();
   let playerName = userData.userName;
   let gameLevel = userData.difficultyLevel;
   return (
      <div>
         <p>PLAYER NAME {playerName} </p>
         <p>LEVEL {gameLevel} </p>
      </div>
   );
}



export { PlayerInfo };