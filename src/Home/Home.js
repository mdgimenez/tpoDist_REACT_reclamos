import React from 'react';
import { Link } from 'react-router-dom';

const Home  = () => {
    return (
        <div>
            <h2>Bienvenidos. 
            <br></br>  
            Esta es una aplicación de Reclamos.</h2>
            <Link to = "/altaUsuario">Crear Usuario</Link> 
            <br></br>
            <Link to = "/altaReclamo">Crear Reclamo</Link> 
            <br></br>
            <Link to = "/reclamos">Ver Reclamos</Link>
        </div>
    );
   }
   
   
   export default Home;
   
   
   