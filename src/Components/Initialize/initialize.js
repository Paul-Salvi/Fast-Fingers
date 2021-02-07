import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './initialize.css'
import Utils from '../../Utils/GameService';

function Initialize() {
  let history = useHistory();
  const [difficulty, setDifficulty] = useState('');
  const [name, setName] = useState('');
  let errorMsg = "";
 

  const handleStartClick = (event) => {
    event.preventDefault();
    if (name.length > 0) {
      Utils.saveUserSession(name.toLocaleUpperCase(), difficulty.toLocaleUpperCase());
      history.push(Utils.REDIRECT_TO_GAME);
    } else {
      errorMsg = "Please provide username";
    }
  }

  return (
    <div className="start-module">
      <h1 className="center">Fast Fingers </h1>
      <input required placeholder="TYPE YOUR NAME" class="" onChange={event => setName(event.target.value)} />
      <br />
      <label>{errorMsg} </label>
      <br />
      <select class="select-level" onChange={event => setDifficulty(event.target.value)} >
        <option value="EASY" selected="">EASY</option>
        <option value="MEDIUM">MEDIUM</option>
        <option value="HARD">HARD</option>
      </select>
      <br />
      <br />
      <button onClick={handleStartClick} class="btn-start-game">START GAME</button>
    </div>
  );
}

export default Initialize;
