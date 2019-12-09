import React, {Component} from 'react';
import './CurrentCard.css';

class Card extends Component {
state = {
value: null,
description: null

}

componentDidMount() {

 this.setState({
value: this.props.value,
description: this.props.description

 });   
}

//create api call to json collection, after click event for button created on top of sidebar

render() {
return (
<div>
<h1>
    {this.state.value}
</h1>
<h4>
    {this.state.description}
</h4>

</div>


);

}


}

export default Card;