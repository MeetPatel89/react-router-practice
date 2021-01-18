import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Route exact path="/"><Home></Home></Route>
      <Route path="/about" render={() => <About/>} />
    </div>
  );
}
