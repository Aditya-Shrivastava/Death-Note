import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Navbar title="Home" />
          <Home />
        </Route>
        <Route exact path="/categories">
          <Navbar title="Categories" />
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
