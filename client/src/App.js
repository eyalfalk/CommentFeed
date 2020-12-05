import React, { Component } from 'react';
import Form from "./components/Form";
import Feed from "./components/Feed";
import axios from 'axios';
import style from './style';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getCommentsFromServer = this.getCommentsFromServer.bind(this);
    this.sendCommentsToServer = this.sendCommentsToServer.bind(this);
  }

  getCommentsFromServer() {
    axios.get(this.props.url)
      .then(response => {
        this.setState( { data: response.data} );
      });
  }

  sendCommentsToServer(comment) {
    let comments = this.state.data;
    comment._id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
      .catch(err => {
        console.error(err);
        this.setState({ data: comments });
      });
  }

  componentDidMount() {
    this.getCommentsFromServer();
  }

  render() {
    return (
      <div style = {style.app} >
        <Form onCommentSubmit = {this.sendCommentsToServer} />
        <Feed data = {this.state.data} />
      </div>
    );
  }
}

export default App;
