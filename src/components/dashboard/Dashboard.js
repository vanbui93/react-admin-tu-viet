import React, { Component } from 'react';
import Welcome from './Welcome';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div style={{ marginBottom: '2em' }}>
                    <Welcome />
                </div>
            </div>
        )
    }
}
