import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to='/'>Home</Link>
      <Link to='/user'>Profile</Link>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/user'>
          <Profile />
        </Route>
      </Switch> 
    </div>
  );
}
