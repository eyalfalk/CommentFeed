import React, { Component } from 'react';
import style from '../style';
import Avatar from './Avatar';

class Comment extends Component{
  render() {
    return (
      <div style = {style.comment} >
        <table>
          <tr>
            <td>
              <Avatar
                style = {style.avatar}
                email = {this.props.email}
                lastCommentDate = {this.props.lastCommentDate}
              />
            </td>
            <div style = {style.commentEmail}>
              {this.props.email}
            </div>
            <div style = {style.commentMessage}>
              {this.props.message}
            </div>
          </tr>
        </table>
      </div>
    );
  }
}

export default Comment;
