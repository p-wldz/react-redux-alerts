import React, { Component } from 'react';

export default class AlertSimpleManager extends Component {
    constructor(props) {
        super(props);
        this.addSuccessMessage.bind(this);
    }
    addSuccessMessage()
    {
        console.log("Test");
    }
    render(){
        return (
            <div>
                <button onClick={this.addSuccessMessage} type="button" className="btn btn-primary">Add new success message</button>
            </div>
        );
    }
}