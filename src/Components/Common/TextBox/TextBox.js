import React from 'react';
import '../TextBox/TextBox.css';

function TextBox({ text, setText, isError = false, placeholder = '', textAlign = 'left', onChange }) {
   if (!onChange) {
      onChange = ({ target: { value } }) => setText(value.toLowerCase());
   }

   return (
      <div className="textBoxContainer">
         <input
            autoFocus
            className={isError ? "textBox error" : "textBox"}
            style={{ textAlign: textAlign }}
            type="text"
            placeholder={placeholder}
            value={text}
            onChange={onChange}
         />
      </div>
   );
}
export default TextBox