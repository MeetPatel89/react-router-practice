import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BlogPost from './BlogPost';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <h1>An experiment in using useParams</h1>
      <Route path="/blogpost/:random"><BlogPost/></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
