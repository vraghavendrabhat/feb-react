import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let { children } = this.props;
        return children.map((child, idx) => {
            return (
                <div key={idx} className="list-group-item">
                    {child}
                </div>
            )
        })
    }
    render() {
        return (
            <div className="bg-info" style={{ padding: '10px',margin:'5px' }}>
                {this.renderChildren()}
            </div>
        );
    }
}

export default Box;