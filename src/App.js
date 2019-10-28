import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './Componentes/Home'
import AltaReclamoForm from './Componentes/AltaReclamoForm';
import LoginUsuario from './Componentes/LoginUsuario'; //Ver fomulario de login
import ConsultaReclamoForm from './Componentes/ConsultaReclamoForm';
import ReclamosList from './Componentes/ReclamosList'; //Ver lista de reclamos

import Reclamo from './Reclamos/Reclamo'; //Ver Reclamo determinado
//import Reclamos from './Reclamos/Reclamos'; //Ver listado con los reclamos


function App() {
  return (
    <div className="App">
      
      <Router>
        <Route exact path = "/" component = {LoginUsuario} />
        <Route path = "/home" component = {Home} />
        <Route path = "/altaReclamo" component = {AltaReclamoForm} />
        <Route path = "/reclamos" component = {ConsultaReclamoForm} />
        <Route path = "/reclamo/:id" component = {Reclamo} />
        <Route path = "/authUsuario" component = {LoginUsuario} />
      </Router>
    </div>
  );
}

export default App;
