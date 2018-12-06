import React from 'react';
import { connect } from 'react-redux';
import AlertList from '../components/AlertList';

const mapStateToProps = state => ({
    alerts: state.alerts
})

export default connect(
    mapStateToProps
)(AlertList)