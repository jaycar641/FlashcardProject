import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component {
state = {
value: "C#",
isActive: true

}

componentDidMount() {

 this.setState({
value: this.props.value,
isActive: this.props.isActive
 });   
}

//create api call to json collection, after click event for button created on top of sidebar

render() {
return (
<div>
<h2>Collection</h2>
<h3>
    {this.state.value}
</h3>

</div>


);

}


}

export default Sidebar;