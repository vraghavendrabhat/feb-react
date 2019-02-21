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
            let { onAction, value } = this.props;
            if (onAction)
                onAction(count * value);
        }); // async

    }
    render() {
        // console.log("ActionButton::render()");
        let { value } = this.props;
        let { count } = this.state;
        let className = `btn ${value < 0 ? 'btn-warning' : 'btn-primary'}`
        return (
            <div className="action-button">
                <button onClick={e => this.increment()} className={className}>{value}</button>
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