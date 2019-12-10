import React, {Component} from 'react';
import Card from './CurrentCard.js';
import Sidebar from './SideBar.js';
import './Game.css';

class Game extends Component {
    constructor (props) {
        super(props);
        this.state = {
    collection: null,
    isReact: true,
    counter: 0,
    cards: Array(3).fill(null)
        };
    }
    
    componentDidMount() {
    var results;
     this.setState({
    collection: results,
     });   
    }

    handleClick () {
        alert('test');
    }
    
    renderCard() {
        return (
        <Card value = "Card" description = "Description" onClick ={() => this.handleClick()} />
        );
    }
    renderSideBar() {

        return (
            <Sidebar title = "title" value = "Is Active" isActive = "true" />
        )
    }
    
    //create api call to json collection, after click event for button created on top of sidebar
    
    render() {
    return (
       <header>
        {this.renderCard()}
    <button>
        <Sidebar title = "C#" isActive = "false"/> 
    </button>
    <button>
        <Sidebar title = "VSCode" isActive = "false" />
    </button>
    </header>
        );
    }
    
}
    
    
    
    
    export default Game;


