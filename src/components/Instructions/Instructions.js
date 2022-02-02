import React, { Component } from 'react';
import './Instructions.css';
import emoji from './emoji.svg';

export class Instructions extends Component {
    render() {
        return (
            <div className="instructions">
                <img alt="laughing crying emoji" src={emoji}></img>
                <p>Click on an emoji to view the emoji's short name</p>
            </div>
        )
    }
}