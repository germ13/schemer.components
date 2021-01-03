import * as React from 'react';
//import { hot } from 'react-hot-loader';
import './App.css'; 

import Meeting from './Meeting';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                Hello.
                <Meeting />
                <Meeting />
            </div>
        )
    }
}


export default App;