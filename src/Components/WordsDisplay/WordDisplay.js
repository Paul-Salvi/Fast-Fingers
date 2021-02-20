import React from 'react';
import './WordDisplay.css'

function WordsDisplay({ word, typedText }) {
   const formattedWord = word.split('').map((letter, index) => <div id={index} className={typedText && typedText[index] ? letter === typedText[index] ? "correct" : "incorrect" : ""}> {letter}</div>)
   return (
      <div className="wordDisplay">
         {formattedWord}
      </div>
   );
}


export default WordsDisplay;