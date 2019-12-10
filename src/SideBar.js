import React from 'react';
import './Sidebar.css';

function Sidebar (props) {
return (
<button className = "collection" onClick = {props.onClick}>
<h2>{props.title}</h2>
<h3>
    {props.value}
</h3>
<h2>{props.isActive}</h2>
</button>


);

}

export default Sidebar;