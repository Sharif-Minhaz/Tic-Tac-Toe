import React from 'react';

function Identity(props) {
    return (
        <div className="identity">
            <h1>{props.brand}</h1>
            <img src={props.logo} alt="logo" />
        </div>
    );
}

export default Identity;