import React from 'react';

const changeButton = (props) => {
    return (
        <button onClick={props.change}>
            <p>Click here!</p>
        </button>
    )
}

export default changeButton;