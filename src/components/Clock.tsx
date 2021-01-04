import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';

class Clock extends Component<any, any>{
    styles: any;

    constructor(props: any) {
        super(props);

        this.state = {
            message: 'hello hello'
        };

        this.styles = {
            fontStyle: 'italic',
            color: 'purple'
        };
    }

    ButtonChange = () => {
        this.setState({
            message: 'Thanks!'
        })
    }

    render() {
        return (
            <div >
                <h3 style={this.styles}>
                    Hello, I am clock!
                </h3>
                <div>{this.state.message}</div>
                <button onClick={this.ButtonChange}>Subscribe</button>
            </div>
        )
    }
}

export default Clock;