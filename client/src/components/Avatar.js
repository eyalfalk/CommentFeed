import React, { Component } from 'react';
import md5 from 'md5';
import style from '../style';

class Avatar extends Component {
  render() {
    const trimLcEmail = this.props.email.trim().toLowerCase();
    const emailHash = md5(trimLcEmail);
    const gravatarUrl = 'https://www.gravatar.com/avatar/' + emailHash;
    return (
      <img
        src = {gravatarUrl}
        alt = {'gravatar'}
        style = {style.avatar}
      />
    );
  }
}

export default Avatar;
