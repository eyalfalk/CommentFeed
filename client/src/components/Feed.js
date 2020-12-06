import React, { Component } from 'react';
import Comment from './Comment';
import style from '../style';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';

class Feed extends Component{
  
  constructor(props) {
    super(props);
    this.state = { filter: '' }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      // Keys will be computed dynamically
      [event.target.name] : event.target.value
    })
  }

  render() {
    let lastCommentPerEmail = {}
    this.props.data.forEach(comment => {
      let lastDate = lastCommentPerEmail[comment.email]
      if ( !lastDate || moment(comment.moment).isAfter(moment(lastDate)) )
      {
        lastCommentPerEmail[comment.email] = comment.moment
      }
    })
    let commentList = this.props.data.map(comment => {
      if (comment.email.includes(this.state.filter))
        return (
          <Comment
            email = {comment.email}
            message = {comment.message}
            lastCommentDate = {lastCommentPerEmail[comment.email]}
          /> )
      else
        return <div/>;
    })
    return (
      <div style = {style.feedBox} >
        <TextField
          name = 'filter'
          placeholder = 'Filter'
          value = {this.state.filter}
          onChange = {this.handleChange}
          variant = 'outlined'
          fullWidth = {true}
          InputProps = { {
            startAdornment : (
              <InputAdornment>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline : true,
            style: style.filterInput
          } }
        />
        <div style = {style.commentList} >
          {commentList}
        </div>
      </div>
    );
  }
}

export default Feed;
