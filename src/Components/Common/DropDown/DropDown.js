import React, { useState } from 'react';
import './DropDown.css';
function DropDown({ items, setItem, placeholder }) {
   const [selected, setSelected] = useState('');
   const options = items.map((item) =>
      <div
         className="options"
         key={item.label}
         onClick={() => { setSelected(item.label); setItem(item.value); }}>
         {item.label}
      </div>);
   return (
      <div className="dropdown">
         <div className="options">{!selected ? placeholder : selected}</div>
         <div className="dropdown-content" >
            {options}
         </div>
      </div>
   );
}
export default DropDown