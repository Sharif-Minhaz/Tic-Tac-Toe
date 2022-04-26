import React from 'react';

function Thumb(props) {
    return (
        <div className="thumb-container">
            <img src={props.img} alt="thumb" />
            <span>{props.time}</span>
        </div>
    );
}

export default Thumb;