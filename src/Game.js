import React from 'react';
import Card from './CurrentCard.js';
import Sidebar from './SideBar.js';
import './Game.css';
import Axios from 'axios';

 class Game extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
    collection: null,
    isReact: null,
    counter: 0,
    reactcards: [ ],
    ccards: [ ],
    
        };
    }
    
    componentDidMount() {
        /*Call api and set results to the cards array*/
        Axios.get('http://localhost:3001/collections')
        .then(res => { 
            this.setState({
                reactcards: res.data.slice(0,1),
                ccards: res.data.slice(1,2)
            })
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
    renderCard(counter) {


        if (this.state.isReact === true) {

            return (
                
                <Card value = "React" description = {this.state.reactcards.cards} onClick ={() => this.handleClick()} />
                

                );

        }
        else {
            return (
                <Card value = 'C#' description = "null" onClick ={() => this.handleClick()} />
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
        {this.renderCard(this.state.counter)}
        </button>

    <button>
        {this.renderSideBar("React")}
    </button>
    <button>
        {this.renderSideBar("C#")}
    </button>
       {
       this.state.reactcards.map(card => {  
            return (
              <h1>{card.title}
               </h1> 
              ); 

              {this.state.reactcards.cards.map(definition => {
                return (
                    <h1>{definition.word}</h1>

                );

              })
            }

              
         
         })
         
         }
            

       <h1>{this.state.counter}</h1>

    </header>


        );
    }
    
}
    
    
export default Game;    
    


