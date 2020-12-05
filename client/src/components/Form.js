import React, { Component } from 'react';
import style from '../style';
import TextField from '@material-ui/core/TextField';

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
    event.preventDefault();
    if (!email || !message) {
      alert(`Please enter both an email AND a message`);
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
        <TextField
          name = 'email'
          placeholder = 'Email'
          value = {this.state.email}
          onChange = {this.handleChange}
          variant = 'outlined'
          fullWidth = {true}
          InputProps = { {
            disableUnderline : true,
            style: style.emailInput
          } }
        />
        <TextField
          name = 'message'
          placeholder = 'Message'
          value = {this.state.message}
          onChange = {this.handleChange}
          variant = 'outlined'
          fullWidth = {true}
          multiline = {true}
          InputProps = { {
            disableUnderline : true,
            style: style.messageInput
          } }
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
