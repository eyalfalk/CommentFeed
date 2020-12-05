import React, { Component } from 'react';
import style from '../style';
import Avatar from './Avatar';

class Comment extends Component{
  render() {
    return (
      <div style = {style.comment} >
        <Avatar
          email = {this.props.email}
          style = {style.avatar}
        />
        <div style = {style.commentEmail} >
          {this.props.email}
        </div>
        <div style = {style.commentMessage} >
          {this.props.message}
        </div>
      </div>
    );
  }
}

export default Comment;
