import React from 'react';
import Header from './Header';
import Home from './Home';
import ServicesList from './ServicesList';
import ServicesDetail from './ServicesDetail';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/services'>
          <ServicesList />
        </Route>
        <Route path='/services/:serviceId'>
          <ServicesDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
