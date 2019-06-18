import React, { Component } from 'react';
import './App.css';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            adj1: "",
            adj2: "",
            bird: "",
            room: "",
            verb1: "",
            verb2: "",
            relative: "",
            noun1: "",
            liquid: "",
            ing: "",
            body: "",
            plNoun: "",
            ing2: "",
            noun2: "",
        }
    }

    adjUpdate1= (e) => {
        this.setState({adj1: e.target.value})
    }
    adjUpdate2= (e) => {
        this.setState({adj2: e.target.value})
    }
    birdUpdate= (e) => {
        this.setState({bird: e.target.value})
    }
    roomUpdate= (e) => {
        this.setState({room: e.target.value})
    }
    verb1Update= (e) => {
        this.setState({verb1: e.target.value})
    }
    verb2Update= (e) => {
        this.setState({verb2: e.target.value})
    }
    submit= () => {
        this.props.fillInAdjective1(this.state.adj1)
        this.props.fillInAdjective2(this.state.adj2)
        this.props.fillInBird(this.state.bird)
        this.props.fillInRoom(this.state.room)
        this.props.fillInVerb1(this.state.verb1)
        this.props.fillInVerb2(this.state.verb2)
    }

    render(){
        const {adjective1, adjective2, bird, room, verb1, verb2, relative, noun1, liquid, ing1, body, plNoun, ing2, noun2} = this.props
      return (
        <div className = "beautify">
            <input text = {adjective1}
                onChange = {this.adjUpdate1}
                placeholder = "adjective 1"
            />
            <input text = {adjective2}
                onChange = {this.adjUpdate2}
                placeholder = "adjective 2"
            />
            <input text = {bird}
                onChange = {this.birdUpdate}
                placeholder = "type of bird"
            />
            <input text = {room}
                onChange = {this.roomUpdate}
                placeholder = "room in the house"
            />
            <input text = {verb1}
                onChange = {this.verb1Update}
                placeholder = "verb (past tense)"
            />
            <input text = {verb2}
                onChange = {this.verb2Update}
                placeholder = "verb"
            />
            <button onClick = {this.submit}> Submit! </button>
        </div>
    )};
}

export default Form;
