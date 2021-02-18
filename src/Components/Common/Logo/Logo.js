import React from 'react'
import keyboardIcon from '../../../public/icons/keyboard-icon.svg'
import './Logo.css';

function Logo() {
   return (
      <div className="Logo">
         <img className="keyboardLogo" src={keyboardIcon} alt="logo" />
         <div className="logoTitle"> fast fingers</div>
         <div className="logoDescription">_________  the ultimate typing game   _________</div>
      </div>
   );
}
export default Logo