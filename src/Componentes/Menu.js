import React,{Component} from 'react';


class Menu extends Component{
    render(){

        return(

<div className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Reclamos App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href = "/home">Home <span className="sr-only">(current)</span></a>
                     
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/altaReclamo">Crear Reclamo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/reclamos"> Buscar Reclamo</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/authUsuario">Salir</a>
                    </li>
                    </ul>              
                  </div>
            </div>

        );
    }

            
}

export default Menu;