import React, { Component } from 'react';
import Alert from './Alert';

export default class AlertList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: [
                {
                    messageType: 'danger',
                    messageText: 'First alert'
                },
                {
                    messageType: 'success',
                    messageText: 'Second alert, success!'
                },
            ]
        }
    }
    render(){
        return (
            <div>
                <div className="bd-example">
                    {this.state.alerts.map((alert, index) => (
                            <Alert key={index} alert={alert}/>
                        )
                    )}

                </div>
            </div>
        );
    }
}