import React, { Component } from 'react';
import B from './B';
import ValueContext from './ValueContext';

class A extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <span className="badge badge-dark">A-Component</span>
                    : {this.props.value.color}
                    <ValueContext.Provider value={this.props.value.color}>
                        <B />
                    </ValueContext.Provider>
                </div>
            </div>
        );
    }
}

export default A;