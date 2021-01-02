import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css'; 

import Meeting from './Meeting.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                Hello.
                <Meeting />
            </div>
        )
    }
}


export default hot(module)(App);