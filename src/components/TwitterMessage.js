import React from "react";
// import App from './App.js'

class TwitterMessage extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleChange =(e) => {
    this.setState({
        text: e.target.value
    })
  }

  render() {
    // debugger
    let newChars = this.props.maxChars - this.state.text.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"  onChange={this.handleChange} value= {this.state.text}/>
        <p>Characters remaining: {newChars}</p>
      </div>
    )

  }
}

export default TwitterMessage;
