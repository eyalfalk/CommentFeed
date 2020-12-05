import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import style from './style';

const pollingIntervalInMS = 500;
const commentsUrl = 'http://localhost:5000/api/comments';

ReactDOM.render(
  <div style = {style.body}>
    <App 
      url = {commentsUrl}
      pollInterval = {pollingIntervalInMS}
    />
  </div>,
  document.getElementById('root')
);
