import React, { Component } from 'react';
import ValueContext from './ValueContext';

class C extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <span className="badge badge-dark">C-Component</span>
                    :
                    <ValueContext.Consumer>
                        {value => value}
                    </ValueContext.Consumer>
                </div>
            </div>
        );
    }
}

export default C;