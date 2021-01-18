import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Settings from './Settings';
import Info from './Info';

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to='/profile/info'>Info</Link>
        </li>
        <li>
          <Link to='/profile/settings'>Settings</Link>
        </li>
      </ul>
      <Route path='/profile/info'>
        <Info />
      </Route>
      <Route path='/profile/settings'>
        <Settings />
      </Route>
    </div>
  );
}
