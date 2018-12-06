import React, { Component } from 'react';
import Alert from './Alert';

export default class AlertList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: this.props.alerts
        }
    }
    componentWillReceiveProps({alerts}) {
        this.setState(
            {
                alerts
            }
        );
    }
    render(){
        if (this.state.alerts.length == 0)
        {
            return <div><i>Please, add new message..</i></div>
        }
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