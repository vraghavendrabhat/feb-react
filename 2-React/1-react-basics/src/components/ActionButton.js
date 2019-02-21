import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './ActionButton.css';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment() {
        let { count } = this.state;
        count += 1;
        this.setState({ count }, () => {
            let { onAction } = this.props;
            if (onAction)
                onAction();
        }); // async

    }
    render() {
        console.log("ActionButton::render()");
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action-button">
                <button onClick={e => this.increment()} className="btn btn-primary">{value}</button>
                &nbsp;&mdash;&nbsp;
                <span className="badge badge-info">{count}</span>
            </div>
        );
    }
}

ActionButton.propType = {
    value: PropTypes.number
}

ActionButton.defaultProps = {
    value: '??'
}

export default ActionButton;