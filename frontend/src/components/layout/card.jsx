import React from 'react';
import './main.css'

const Card = (props) => (
    <div className={classes.imageDiv}>
        <img src={props.src} className="card-image" alt={props.id}/>
    </div>
)

export default Card;