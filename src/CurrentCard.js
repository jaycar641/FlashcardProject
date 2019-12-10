import React from 'react';
import './CurrentCard.css';
import './Game.js';

function Card(props) {

return (
<button className="card" onClick={props.onClick}>

   <h2>{props.value}</h2> 
   <h2>{props.description}</h2> 
</button>


);

}

export default Card;