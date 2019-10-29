import React, {Component} from 'react';

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

    onGoReclamos = () => {
        this.props.history.push('/reclamos/' + this.props.match.params.id);
    }

    onGoHome = () => {
        this.props.history.push('/home/' + this.props.match.params.id);
    }

    render() {
        var { isLoaded, reclamo } = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h2 className = "selectedReclamo">
                        Detalle de reclamo: "{this.props.match.params.idReclamo}"
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
                    
                    <div>
                        <button className="btn btn-primary" onClick={this.onGoReclamos}>Volver a los Reclamos</button>
                    </div>

                    <div>
                        <button className="btn btn-primary" onClick={this.onGoHome}>Volver al Home</button>
                    </div>
                
                </div>
            );
        }
    }
}

export default Reclamo;