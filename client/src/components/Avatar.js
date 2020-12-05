import React, { Component } from 'react';
import md5 from 'md5';

class Avatar extends Component {
  render() {
    // TODO [EF] move 3 lines to constructor ?
    const trimLcEmail = this.props.email.trim().toLowerCase();
    const emailHash = md5(trimLcEmail);
    const gravatarUrl = "https://www.gravatar.com/avatar/" + emailHash;
    return (
      <img
        src = {gravatarUrl}
        alt = {'gravatar'}
      />
    );
  }
}

export default Avatar;
