import React, { Component } from 'react';
import './App.css';

class Display extends Component {
    render(){
      const {adjective1, adjective2, bird, room, verb1, verb2, relative, noun1, liquid, ing1, body, plNoun, ing2, noun2} = this.props
      return (
        <div>
        <p> It was a {adjective1}, cold November day. I woke up to the {adjective2} smell of {bird} roasting in the {room} downstairs. I {verb1} down the stairs to see if I could help {verb2} the dinner. My mom said, "See if {relative} needs a fresh {noun1}." So I carried a tray of glasses full of {liquid} into the {ing1} room. When I got there, I couldn't believe my {body}! There were {plNoun} {ing2} on the {noun2}! </p>
        </div>
    )};
}

export default Display;
