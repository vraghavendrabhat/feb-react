import React, { Component } from 'react';
import C from './C';

class B extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <span className="badge badge-dark">B-Component</span>
                    <C />
                </div>
            </div>
        );
    }
}

export default B;