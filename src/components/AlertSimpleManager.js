import React, { Component } from 'react';

export default class AlertSimpleManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
        this.addSuccessMessage = this.addSuccessMessage.bind(this);
        this.addDangerMessage = this.addDangerMessage.bind(this);
        this.changeValues = this.changeValues.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e)
    {
        e.preventDefault();
        this.setState({ message: "" });
    }
    addSuccessMessage()
    {
        this.props.addMessage(this.state.message, "success");
    }
    addDangerMessage()
    {
        this.props.addMessage(this.state.message, "danger");
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
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="message">Write message..</label>
                        <input type="text" onChange={this.changeValues} className="form-control" id="message" name="message" value={this.state.message} />
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.addSuccessMessage} className="btn btn-primary">Add new success message</button>
                        <button type="submit" onClick={this.addDangerMessage} className="btn btn-warning">Add new danger message</button>
                    </div>

                </form>
            </div>
        );
    }
}