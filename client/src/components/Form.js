import React, { Component } from 'react';
import style from '../style';

class Form extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, message } = this.state;
    if (!email || !message) {
      alert(`Please enter both an email AND a message`);
      // don't refresh the page (to keep any already-entered text):
      event.preventDefault();
      return;
    }
    this.props.onCommentSubmit({email: email, message: message});
  }

  handleChange(event) {
    this.setState({
      // Keys will be computed dynamically
      [event.target.name] : event.target.value
    })
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit} style = {style.formBox}>
        <input
          type = 'text'
          name = 'email'
          placeholder = 'Email'
          value = {this.state.email}
          onChange = {this.handleChange}
          style = {style.emailInput}
        />
        <input
          type = 'text'
          name = 'message'
          placeholder = 'Message'
          value = {this.state.message}
          onChange = {this.handleChange}
          style = {style.messageInput}
        />
        <input
          type = 'submit'
          value = 'Submit'
          style = { style.submitInput }
        />
      </form>
    );
  }
}

export default Form;
