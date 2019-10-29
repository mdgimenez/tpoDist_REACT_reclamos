import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idReclamo: ''
        }
    }

    onInputReclamo = (input) => {
        const numero = (input.target.validity.valid) ? input.target.value : this.state.idReclamo;
        this.setState({
            idReclamo: numero
        });
    }

    onSearch = () => {
        this.props.history.push('/id/' + this.props.match.params.id + '/reclamo/' + this.state.idReclamo);
    }

    onAltaReclamo = () => {
        this.props.history.push('/altaReclamo/' + this.props.match.params.id);
    }

    onReclamos = () => {
        this.props.history.push('/reclamos/' + this.props.match.params.id);
    }

    onLogout = () => {
        this.props.history.push('/authUsuario')
    }

    render() {
        return (
            <div>
                <div className="jumbotron">

                    <h1 className="display-3">Bienvenidos</h1>
                    <p className="lead">Esto es una aplicación en donde usted podrá gestionar y cargar reclamos de una manera fácil y rápida.
                    Para comenzar elija, en el menú color naranja ubicado en la parte superior de la pantalla, lo que desea hacer.</p>
                    <hr className="my-4"></hr>
                    <p>Si quiere consultar por un reclamo específico y conoce el número de reclamo, también puede hacerlo desde aquí:</p>

                    <div className="jumbotron">
                            <div className="form-group">
                                <label htmlFor="input" className="col-form-label">Número de reclamo: </label>
                                <input type="text" pattern="[0-9]*" className="form-control" placeholder="Ingrese número del reclamo" id="input" 
                                    name= "idReclamo" onChange={this.onInputReclamo} value={this.state.idReclamo}/>
                                <button className="btn btn-primary" type="submit" onClick={this.onSearch}>Buscar</button>
                            </div>
                    </div>

                </div>

                <div>
                    <button className="btn btn-primary" onClick={this.onAltaReclamo}>Crear Reclamo</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.onReclamos}>Ver Reclamos</button>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.onLogout}>Cerrar Sesion</button>
                </div>
            </div>
        );
    }
   
   }
   
   export default Home;