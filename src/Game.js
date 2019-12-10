import React from 'react';
import Card from './CurrentCard.js';
import Sidebar from './SideBar.js';
import './Game.css';

class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
    collection: null,
    isReact: null,
    counter: 0,
    cards: Array(3).fill(null)
    
        };
    }
    
    componentDidMount() {
        /*Call api and set results to the cards array*/
     this.setState({
    cards: [3, 6, 9, 12],
    collection: this.state.isReact ? 'React' : 'C#'

     });   
    }

    handleClick () {
        this.setState({
         counter: this.state.counter + 1,
        });
    }
    
    handleSideBarClick (value) {
       if (value === 'React')
       {
        this.setState({
         isReact: true,

        });
        }
        else {
            this.setState({
            isReact: false,
            });
        }
    }
    renderCard() {
        var description1 = this.state.cards[this.state.counter];
        if (this.state.isReact === true) {

            return (
                <Card value = 'React' description = {description1} onClick ={() => this.handleClick()} />
                );

        }
        else {
            return (
                <Card value = 'C#' description = {description1} onClick ={() => this.handleClick()} />
                );
        }
       
    }
    renderSideBar(value) {
        var definition = null;
        
        return (
            <Sidebar title = {value} value ={definition} onClick ={() => this.handleSideBarClick(value)} />
            
        )
    }
    
    //create api call to json collection, after click event for button created on top of sidebar
    
    render() {
    return (
       <header>
         <button>
        {this.renderCard()}
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


