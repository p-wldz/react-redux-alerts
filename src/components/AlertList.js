import React, { Component } from 'react';
import Alert from './Alert';

export default class AlertList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        if (this.props.alerts.length == 0)
        {
            return <div><i>Please, add new message..</i></div>
        }
        return (
            <div>
                <div className="bd-example">
                    {this.props.alerts.map((alert, index) => (
                            <Alert key={index} alert={alert}/>
                        )
                    )}
                </div>
            </div>
        );
    }
}