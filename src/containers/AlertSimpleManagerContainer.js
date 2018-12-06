import React from 'react';
import { connect } from 'react-redux';
import AlertSimpleManager from '../components/AlertSimpleManager';
import { addMessage } from '../actions/index';

const mapStateToProps = state => ({
    alerts: state.alerts
})
const mapDispatchToProps = (dispatch) => ({
    addMessage: (messageText, messageType) => dispatch(addMessage(messageText, messageType))
})

export default connect(
    mapStateToProps, mapDispatchToProps
)(AlertSimpleManager)