import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home/Home'
import Reclamos from './Reclamos/Reclamos';
import Reclamo from './Reclamos/Reclamo';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Home} />
        <Route path = "/home" component = {Home} />
        <Route path = "/reclamos" component = {Reclamos} />
        <Route path = "/reclamo/:id" component = {Reclamo} />
      </Router>
    </div>
  );
}

export default App;
