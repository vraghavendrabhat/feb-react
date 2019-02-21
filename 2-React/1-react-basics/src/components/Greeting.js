import React, { Component } from 'react';

class Greeting extends Component {

    constructor(props) {
        super(props);
        console.log("Greeting :: constructor()");
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.forceUpdate();
        }, 500);
    }

    render() {
        console.log("Greeting :: render()");
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Greeting :: shouldComponentUpdate()");
        return this.props.message !== nextProps.message;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Greeting :: componentDidUpdate()");
    }

    componentWillUnmount() {
        console.log("Greeting :: componentWillUnmount()");
        clearInterval(this.interval)
    }
}

Greeting.defaultProps = {
    message: 'Nil'
}

Greeting.displayName = "ibm-greet"

export default Greeting;

