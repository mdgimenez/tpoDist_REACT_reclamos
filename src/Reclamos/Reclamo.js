import React, {Component} from 'react';
import Menu from './Menu';

class Reclamo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reclamo: '',
            isLoaded: false
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerReclamo?id=' + this.props.match.params.idReclamo, {
            method: 'GET'
        }).then(response => response.json() )
        .then(result => {
            this.setState({
                isLoaded: true,
                reclamo: result
            });
        }).catch(error => {
            alert(error);
        });
    }

    render() {
        var { isLoaded, reclamo } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <>
                    <Menu
                        Home={'/home/' + this.props.match.params.id} 
                        CrearReclamo={'/altaReclamo/' + this.props.match.params.id}
                        Reclamos={'/reclamos/' + this.props.match.params.id}
                    />

                    <h1>Reclamo N°: "{this.props.match.params.idReclamo}"</h1>

                    <table className="table table-bordered table-responsive-md table-striped text-center">
                        {/*Cabecera*/}
                        <thead className="table-primary">
                            <tr>
                                <th scope="col">Detalles</th>
                                <th scope="col">Información</th>
                            </tr>
                        </thead>

                        {/*Filas*/}
                        <tbody>
                            <tr>
                                <td>Persona:</td>
                                <td>{reclamo.persona}</td>
                            </tr>
                            <tr>
                                <td>Edificio:</td> 
                                <td>{reclamo.edificio}</td>
                            </tr>
                            <tr>
                                <td>Piso: N°</td>
                                <td>{reclamo.piso}</td>
                            </tr>
                            <tr>
                                <td>Ubicacion:</td>
                                <td>{reclamo.ubicacion}</td>
                            </tr>
                            <tr>
                                <td>Descripcion:</td>
                                <td>{reclamo.descripcion}</td>
                            </tr>
                            <tr>
                                <td>Estado:</td>
                                <td>{reclamo.estado}</td>
                            </tr>
                            <tr>
                                <td>Fecha:</td>
                                <td>{reclamo.fecha}</td>
                            </tr>
                            <tr>
                                <td>Imagen/es:</td>
                                <td>{
                                        reclamo.imagenes.map(item => (
                                            <img 
                                                key={item.numero} 
                                                src={`data:image/${item.tipo};base64,${item.binary}`} 
                                                style={{width: 500, height: 500}} 
                                                alt="Imagen" 
                                            />
                                        ))
                                    }
                                </td>                               
                            </tr>
                            
                        </tbody>

                    </table>
                    
                </>
            );
        }
    }
}

export default Reclamo;