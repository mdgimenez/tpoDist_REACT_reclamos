import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './MenuUsuario';

class AutenticarUsuarioForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            usuario: '30669045',
            password: '1234',
            tipoDoc: 'DNI',
            auth: false,
            id: ''
        }
    }

    onSelected = (e) => {
        let idx = e.target.selectedIndex;
        let dataset = e.target.options[idx].dataset;
        this.setState({
            tipoDoc: dataset.isd
        }); 
    }

    onChangePassword = (password) => {
        this.setState({
            password : password.target.value
        });
    }

    onChangeUser = (usuario) => {
        this.setState({
            usuario: usuario.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        let usuario = this.state.tipoDoc+this.state.usuario;
        await fetch('http://localhost:8080/ar/AutenticarUsuario?usuario='+usuario+'&password='+this.state.password, {
            method: 'POST',
        }).then((response) => response.json())
          .then((result) => {
            this.setState({
                auth: true,
                id: result.id
            })
            if(this.state.auth && this.state.id !== -1) {
                alert("Autenticado exitosamente");
                this.props.history.push('/home/' + this.state.id);
            }
            else {
                alert("Datos incorrectos");
                this.setState({
                    password: ''
                })
            }  
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render(){
        return(
            <> 
                <Menu />
                <div>
                    <h1>Inicio de sesión</h1>
                    <form className="jumbotron">

                        <div className="form-group">
                                <div className="form-group">
                                    <label htmlFor="tipoDNI">Seleccione tipo de Documento</label>
                                    <select className="form-control" id="tipoDNI" onChange={this.onSelected} >
                                        <option data-isd="DNI" >DNI</option>
                                        <option data-isd="CI" >CI</option>
                                        <option data-isd="CPA" >CPA</option>
                                    </select>
                                    <label htmlFor="inputDI">Ingrese su número de documento</label>
                                    <input type="text" className="form-control" id="inputDI" placeholder="12345678" value={this.state.usuario} onChange={this.onChangeUser} />
                                </div>
                        </div> 
                        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Ingrese su contraseña </label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="contraseña" value={this.state.password} onChange={this.onChangePassword} />
                        </div> 
                        
                        <div>
                            <button className="btn btn-primary" onClick={this.onSubmit}>Iniciar sesión</button>
                        </div>
                        
                        <div>
                            <Link to = "/altaUsuario">Si no está registrado haga click aquí para registrarse</Link>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default AutenticarUsuarioForm;