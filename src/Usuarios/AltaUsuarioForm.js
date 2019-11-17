import React,{Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from './MenuUsuario';

class AltaUsuarioForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            usuario: '',
            password: '',
            tipoDoc: 'CI',
        }

        this.onSelected = this.onSelected.bind(this);
    }

    onSelected (e) {
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
        await fetch('http://localhost:8080/ar/AltaUsuario?usuario='+usuario+'&password='+this.state.password, {
            method: 'POST',
        }).then((response) => {
            if(response.status === 200){
                alert("Registrado exitosamente");
                this.props.history.push('/home');
            }
            if(response.status === 500)
                alert("Datos incorrectos");
        }).catch((error) => {
            console.log(error);
        })
    }
    
    render(){
        return (
            <> 
                <Menu />
                <div>
                    <h1>Alta usuario</h1>
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
                            <label htmlFor="exampleInputPassword1">Ingrese una contraseña </label>
                            <input type="password" className="form-control" id="inputPassword" placeholder="contraseña" value={this.state.password} onChange={this.onChangePassword} />
                        </div> 
                        
                        <div>
                            <button className="btn btn-primary" onClick={this.onSubmit}>Registrarse</button>
                        </div>
                        
                        <div>
                            <Link to = "/authUsuario">Si ya se encuentra registrado haga click aquí para iniciar sesión</Link>
                        </div>
                    </form>
                </div> 
            </>
        );
    }
}

export default withRouter(AltaUsuarioForm);