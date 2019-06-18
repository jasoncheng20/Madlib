import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'
import Display from './Display.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            adjective1: "____",
            adjective2: "____",
            bird: "____",
            room: "____",
            verb1: "____",
            verb2: "____",
            relative: "____",
            noun1: "____",
            liquid: "____",
            ing: "____",
            body: "____",
            plNoun: "____",
            ing2: "____",
            noun2: "____",
        }
    }

    fillInAdjective1 = (adjective) => {
        this.setState({adjective1:adjective})
    }
    fillInAdjective2 = (adjective) => {
        this.setState({adjective2:adjective})
    }
    fillInBird = (bird) => {
        this.setState({bird:bird})
    }
    fillInRoom = (room) => {
        this.setState({room:room})
    }
    fillInVerb1 = (verb) => {
        this.setState({verb1:verb})
    }
    fillInVerb2 = (verb) => {
        this.setState({verb2:verb})
    }

    render(){
      const {adjective1, adjective2, bird, room, verb1, verb2, relative, noun1, liquid, ing1, body, plNoun, ing2, noun2} = this.state
      return (
        <div className = "beautify">
            <h1> Mad Lib! </h1>
            <Form adjective1 = {adjective1}
            fillInAdjective1 = {this.fillInAdjective1}
            adjective2 = {adjective2}
            fillInAdjective2 = {this.fillInAdjective2}
            bird = {bird}
            fillInBird = {this.fillInBird}
            room = {room}
            fillInRoom = {this.fillInRoom}
            verb1 = {verb1}
            fillInVerb1 = {this.fillInVerb1}
            verb2 = {verb2}
            fillInVerb2 = {this.fillInVerb2}
            />
            <Display adjective1 = {adjective1}
            adjective2 = {adjective2}
            bird = {bird}
            room = {room}
            verb1 = {verb1}
            verb2 = {verb2}
            relative = {relative}
            noun1 = {noun1}
            liquid = {liquid}
            ing1 = {ing1}
            body = {body}
            plNoun = {plNoun}
            ing2 = {ing2}
            noun2 = {noun2}
            />
        </div>
    )};
}

export default App;
