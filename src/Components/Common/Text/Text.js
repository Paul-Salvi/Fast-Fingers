import React from 'react';
import './Text.css'
function Text({ icon, text }) {
    return (
        <>
            <div className="iconText" >
                {icon ? <img className="icon" src={icon} alt="icon" /> : null}
                <span>{text}</span>
            </div>
        </>
        );
}
export default Text;