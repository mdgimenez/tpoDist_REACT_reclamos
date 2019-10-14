import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CrearReclamo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            documento: '',
            edificio: '',
            ubicacion: '',
            descripcion: '',
            piso: '',
            identificador: '',
        }
    }

    render() {
        return (
            <div>
                <h2>Creacion de Reclamo:</h2>
                <form>
                    <label>
                        Documento:
                        <input type="text" name="documento" />
                    </label>
                    <br></br> 
                    <input type="submit" value="Submit" />
                </form>
                <Link to = "/home">Volver</Link>
            </div>
        ); 
    }
}

export default CrearReclamo;