import React, { Component } from 'react';
import md5 from 'md5';
import style from '../style';
import {Popover, Typography} from '@material-ui/core/';

class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl : null
    }
  }

  render() {
    const trimLcEmail = this.props.email.trim().toLowerCase();
    const emailHash = md5(trimLcEmail);
    const gravatarUrl = 'https://www.gravatar.com/avatar/' + emailHash;
    
    const handleClick = (event) => {
      this.setState( {anchorEl : event.currentTarget} );
    };
  
    const handleClose = () => {
      this.setState( {anchorEl : null} );
    };
  
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <img
          src = {gravatarUrl}
          alt = {'gravatar'}
          style = {style.avatar}
          onClick = {handleClick}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={this.state.anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <Typography style={style.popup}>
            {this.props.email} <br/>
            Last active: <br/>
            {this.props.lastCommentDate} <br/>
          </Typography>
        </Popover>
      </div>
    );
  }
}

export default Avatar;
