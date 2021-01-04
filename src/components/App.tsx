import * as React from 'react';
//import { hot } from 'react-hot-loader';
import './App.css'; 

import Meeting from './Meeting';
import Clock from './Clock';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                Hello.
                <Clock />
                <Meeting />
            </div>
        )
    }
}


export default App;