import React,{Component} from 'react';

class Menu extends Component{
    render(){
        return(
            <div className="navbar navbar-expand-lg navbar-dark bg-primary">
                
                <a className="navbar-brand" href="/authUsuario">Iniciar sesión</a>
                
                <a className="navbar-brand" href="/altaUsuario">Registrarse</a>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>
        );
    }
}
export default Menu;