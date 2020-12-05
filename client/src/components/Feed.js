import React, { Component } from 'react';
import Comment from './Comment';
import style from '../style';

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
    let commentList = this.props.data.map(comment => {
      if (comment.email.includes(this.state.filter))
        return (
          <Comment
            email = {comment.email}
            message = {comment.message}
            key = {comment['_id']}
          /> )
      else
        return <div/>;
    })
    return (
      <div style = {style.feedBox} >
        <form id='search'>
        <input
          type = 'text'
          name = 'filter'
          placeholder = 'Filter'
          value = {this.state.filter}
          onChange = {this.handleChange}
          style = {style.filterInput}
        />
        </form>
        <div style = {style.commentList} >
          {commentList}
        </div>
      </div>
    );
  }
}

export default Feed;
