import React from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Home/Home'
import AutenticarUsuarioForm from './Usuarios/AutenticarUsuarioForm';
import AltaUsuarioForm from './Usuarios/AltaUsuarioForm';
import AltaReclamoForm from './Reclamos/AltaReclamoForm';
import Reclamos from './Reclamos/Reclamos';
import Reclamo from './Reclamos/Reclamo';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Home} />
        <Route path = "/home/:id" component = {Home} />
        <Route path = "/authUsuario" component = {AutenticarUsuarioForm} />
        <Route path = "/altaUsuario" component = {AltaUsuarioForm} />
        <Route path = "/altaReclamo/:id" component = {AltaReclamoForm} />
        <Route path = "/reclamos/:id" component = {Reclamos} />
        <Route path = "/id/:id/reclamo/:idReclamo" component = {Reclamo} />
      </Router>
    </div>
  );
}

export default App;
