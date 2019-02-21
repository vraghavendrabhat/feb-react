import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    render() {
        // let { value } = this.props;
        return (
            <div className="alert alert-danger">
                Total count : <span className="badge badge-dark">{this.props.value}</span>
            </div>
        );
    }
}

// TotalCountDisplay.propTypes = {
//     value: 0
// }

export default TotalCountDisplay;