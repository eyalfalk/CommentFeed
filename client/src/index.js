import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const pollingIntervalInMS = 500;
const commentsUrl = 'http://localhost:5000/api/comments';

ReactDOM.render(
  <React.StrictMode>
    <App 
      url = {commentsUrl}
      pollInterval = {pollingIntervalInMS}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
