import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Reclamo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reclamo: '',
            isLoaded: false
        }
    }

    async componentDidMount() {

        await fetch('http://localhost:8080/ar/VerReclamo?id=' + this.props.match.params.id, {
            method: 'GET',
         //   headers: {
         //       'Accept': 'application/json',
         //       'Content-Type': 'application/json'
         //   },
         //   body: JSON.stringify({ idReclamo: this.props.match.params.id })
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
        var {isLoaded, reclamo} = this.state;
       
        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h2 className = "selectedReclamo">
                        Detalle de reclamo: "{this.props.match.params.id}"
                    </h2>
                        Persona: {reclamo.persona}<p></p>
                        Edificio: {reclamo.edificio}<p></p>
                        Piso: N° {reclamo.piso}<p></p>
                        Ubicacion: {reclamo.ubicacion}<p></p>
                        Descripcion: {reclamo.descripcion}<p></p>
                        Estado: {reclamo.estado}<p></p>
                        Fecha: {reclamo.fecha}<p></p>
                        Imagen/es: 
                        <p></p>
                        {
                            reclamo.imagenes.map(item => (
                                <img 
                                    key={item.numero} 
                                    src={`data:image/${item.tipo};base64,${item.binary}`} 
                                    style={{width: 500, height: 500}} 
                                    alt="Imagen" 
                                />
                            ))
                        }
                    <p></p>
                    <Link to = "/reclamos">Volver</Link>
                </div>
            );
        }
    }
}

export default Reclamo;