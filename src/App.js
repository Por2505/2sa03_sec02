import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import './App.css';
const word = "Hello";
class App extends Component {
 render() {
 return (
 <div className="Card">
 {
 Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
 }
 </div>
 );
 }
}

export default App;
