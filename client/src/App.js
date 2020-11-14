import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Redirect, Link} from '@reach/router';



import AllPirates from './views/AllPirates';
import SinglePirate from './views/SinglePirate';
import NewPirate from './views/NewPirate';

function App() {
  return (
    <div className="App">
      <h1> Welcome to Pirates App!</h1>
      <Router>
        <AllPirates path='pirates' />
        <SinglePirate path='pirate/:id'/>
        <NewPirate path='pirate/new' />
        <Redirect from='/' 
        to='pirates'
        noThrow
        />
      </Router>
    </div>
  );
}

export default App;
