import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Reclamo extends Component {
    render() {
        return (
            <div>
                <h2 className = "selectedReclamo">
                    Detalle de reclamo: "{this.props.match.params.id}"
                </h2>
                <p>
                    <b>
                        <u>
                            TO DO
                        </u>
                    </b>
                </p>
                <Link to = "/reclamos">Volver</Link>
            </div>
        );
    }
}

export default Reclamo;