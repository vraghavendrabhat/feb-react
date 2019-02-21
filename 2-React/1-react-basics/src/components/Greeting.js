import React, { Component } from 'react';

class Greeting extends Component {

    // constructor(props) {
    //     super(props);
    //     // console.log("Greeting :: constructor()");
    // }

    render() {
        // console.log("Greeting :: render()");
        let { message } = this.props;
        return (
            <div className="alert alert-info">
                <p>{message}</p>
                <hr />
                <p>{new Date().toLocaleTimeString()}</p>
            </div>
        )
    }

}

Greeting.defaultProps = {
    message: 'Nil'
}

export default Greeting;

