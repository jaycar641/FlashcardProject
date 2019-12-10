import React from 'react';
import Card from './CurrentCard.js';
import Sidebar from './SideBar.js';
import './Game.css';

class Game extends React.Component {
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
    cards: results,
    collection: this.state.isReact ? 'React' : 'C#'

     });   
    }

    handleClick () {
        this.setState({
         counter: this.state.counter + 1,
        });
    }
    
    handleSideBarClick (props) {
       
        this.setState({
         collection: props.collection

        });
    }
    renderCard(value) {
        var description1 = this.cards[this.counter];
        if (value === "React") {
            return (
                <Card value = "React" description = {description1} onClick ={() => this.handleClick()} />
                );

        }
        else {
            return (
                <Card value = "C#" description = "Description" onClick ={() => this.handleClick()} />
                );
        }
       
    }
    renderSideBar(value) {
        var definition = null;

        return (
            <Sidebar title = {value} value ={definition} onClick ={() => this.handleSideBarClick()} />
            
        )
    }
    
    //create api call to json collection, after click event for button created on top of sidebar
    
    render() {
    return (
       <header>
         <button>
        {this.renderCard(this.state.collection)}
        <h1>{this.state.counter}</h1>
        <h1>{this.state.isReact}</h1>
        </button>

    <button>
        {this.renderSideBar("React")}
    </button>
    <button>
        {this.renderSideBar("C#")}
    </button>
    
    </header>


        );
    }
    
}
    
    
    
    
    export default Game;


