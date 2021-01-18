import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Settings from './Settings';
import Info from './Info';

export default function Profile() {
  console.log(useRouteMatch());
  const { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);
  return (
    <div>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/info`}>Info</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Settings</Link>
        </li>
      </ul>
      <Route path={`${path}/info`}>
        <Info />
      </Route>
      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
    </div>
  );
}
