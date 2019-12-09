import React from 'react';
import './App.css';
import './CurrentCard.js';
import Card from './CurrentCard.js';
import Sidebar from './SideBar.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card value = "Card" description = "Description" />
      </header>

     <Sidebar value = "C#"/>

     <Sidebar value = "VSCode"/>


    </div>
  );
}



export default App;
