import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Greeting from './components/Greeting';
import ActionBox from './components/ActionBox';
import Box from './components/Box';
import Product from './components/Product';
import Employee from './components/Employee';
import A from './components/A';

class App extends Component {
  constructor(props) {
    super();
    //console.log(props);  
    this.state = {
      message: 'greetings'
    }
    console.log("App :: constructor()");
  }
  changeMessage(message) {
    this.setState({ message })
  }

  renderGreeting() {
    // let message = this.state.message;
    //or
    let { message } = this.state; // de-structuring
    if (message)
      return <Greeting message={message} />
    else
      return null;
  }

  render() {
    console.log("App :: render()");
    // this.props.title = "New Titile"; // error i.e immutable
    let { title, trainer } = this.props;
    return (
      <div className="container">
        <hr />
        <h1>{title} : <small className="badge badge-primary">{trainer}</small> </h1>
        <hr />
        <A value={{ color: 'red' }} />
        <A value={{ color: 'green' }} />
        <hr />
        <Box >
          <Product />
          <Product />
          <Product />
          <Product />
        </Box>
        <Box>
          <Employee />
          <Employee />
        </Box>
        <hr />

        <ActionBox />

        <hr />

        <button onClick={e => this.changeMessage('good morning')} className="btn btn-primary">GM</button>&nbsp;
        <button onClick={e => this.changeMessage('good noon')} className="btn btn-primary">GN</button>&nbsp;
        <button onClick={e => this.changeMessage('good evening')} className="btn btn-primary">GE</button>&nbsp;
        <button onClick={e => this.changeMessage('')} className="btn btn-danger">Remove</button>&nbsp;
        <hr />

        {/* {this.state.message ? <Greeting message={this.state.message} /> : null} */}

        {this.renderGreeting()}

      </div>
    );
  }

  componentDidMount() {
    console.log("App :: componentDidMount()");
    //n/w
    setTimeout(() => {
      let serverMessage = "Hello! from server";
      this.setState({ message: serverMessage })
    }, 2000);
  }

}

App.defaultProps = {
  trainer: "Anonymous"
}
App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
