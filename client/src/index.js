import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './style';

const commentsUrl = 'http://localhost:5000/api/comments';

ReactDOM.render(
  <div style = {style.body}>
    <App 
      url = {commentsUrl}
    />
  </div>,
  document.getElementById('root')
);
