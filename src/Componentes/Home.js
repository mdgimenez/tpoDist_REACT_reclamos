
import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';

/*<br></br>
<Link to = "/altaUsuario">Crear Usuario</Link>
<Link to = "/authUsuario">Iniciar sesion</Link>
<br></br>
<Link to = "/altaReclamo">Crear Reclamo</Link> 
<br></br>
<Link to = "/reclamos">Ver Reclamos</Link>      
          
*/

const Home  = () => {
    return (
    <>
        <Menu/> 
            

            <div className="jumbotron">

                        <h1 className="display-3">Bienvenidos</h1>
                        <p className="lead">Esto es una aplicación en donde usted podrá gestionar y cargar reclamos de una manera fácil y rápida.
                        Para comenzar elija, en el menú color naranja ubicado en la parte superior de la pantalla, lo que desea hacer.</p>
                        <hr className="my-4"></hr>
                        <p>Si quiere consultar por un reclamo específico y conoce el número de reclamo, también puede hacerlo desde aquí:</p>
                        
                
                <div>
                       <form className='demo2 col-md-15' display="block" >
                            <input className='demo2 col-md-3' type="text" placeholder="Ingrese número de reclamo"/>
                            <button className="btn btn-primary my-10 my-sm-4" type="submit">Buscar</button>
                        </form>
                </div>

                        
            </div>

   
            
    </>
           
    );
   }
export default Home;



