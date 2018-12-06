import React, { Component } from 'react';

export default class AlertSimpleManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.addSuccessMessage = this.addSuccessMessage.bind(this);
        this.changeValues = this.changeValues.bind(this);
    }
    addSuccessMessage(e)
    {
        e.preventDefault();
        console.log("Test");
    }
    changeValues(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.addSuccessMessage}>
                    <input type="text" onChange={this.changeValues} name="message" value={this.state.message} />
                    <button type="submit" className="btn btn-primary">Add new success message</button>
                </form>
            </div>
        );
    }
}