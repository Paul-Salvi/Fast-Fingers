import React from 'react';
import Utils from '../../Utils/GameService';
import personIcon from '../../public/icons/person-icon.svg'
import gamepadIcon from '../../public/icons/gamepad-icon.svg'
import Text from '../Common/Text/Text';
import './PlayerInfo.css'

function PlayerInfo() {

   const userData = Utils.getUserSession();
   let playerName = userData.userName;
   let gameLevel = userData.difficultyLevel;
   return (
      <div className="info">
         <Text
            icon={personIcon}
            text={"PLAYER NAME : " + playerName}>
         </Text>
         <Text
            icon={gamepadIcon}
            text={"LEVEL : " + gameLevel}>
         </Text>
      </div>
   );
}



export { PlayerInfo };