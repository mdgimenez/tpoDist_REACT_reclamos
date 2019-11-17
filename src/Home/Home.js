import React, { Component } from 'react';
import Menu from '../Reclamos/Menu';

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

    render() {
        return (
            <>
                <Menu
                    Home={'/home/' + this.props.match.params.id} 
                    CrearReclamo={'/altaReclamo/' + this.props.match.params.id}
                    Reclamos={'/reclamos/' + this.props.match.params.id}
                />

                <div className="jumbotron">

                    <h1 className="display-3">Bienvenidos</h1>
                    <p className="lead">Esto es una aplicación en donde usted podrá gestionar y cargar reclamos de una manera fácil y rápida.
                    Para comenzar elija, en el menú color naranja ubicado en la parte superior de la pantalla, lo que desea hacer.</p>
                    <hr className="my-4"></hr>
                    <p>Si quiere consultar por un reclamo específico y conoce el número de reclamo, también puede hacerlo desde aquí:</p>

                    <div>
                        <form className='demo2 col-md-15' display="block">
                            <input className='demo2 col-md-3' type="text" pattern="[0-9]*" placeholder="Ingrese número del reclamo" onChange={this.onInputReclamo} value={this.state.idReclamo}/>
                            <button className="btn btn-primary my-10 my-sm-4" type="submit" onClick={this.onSearch}>Buscar</button>
                        </form>
                    </div>

                </div>

            </>
        );
    }
   
   }
   
   export default Home;