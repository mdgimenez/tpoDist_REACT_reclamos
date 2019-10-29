import React, {Component} from 'react';

class Reclamos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            reclamos: [],
            isLoaded: false,
            idReclamo: ''
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerReclamos?id=' + this.props.match.params.id, {
            method: 'GET'
        }).then(response => response.json())
          .then(result => {
              this.setState({
                  isLoaded: true,
                  reclamos: result
              });
          }).catch(error => {
              alert("Error en API " + error);
          });
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
    
    handlerClickItem(idReclamo) {
        this.props.history.push('/id/' + this.props.match.params.id + '/reclamo/' + idReclamo);
    }

    onGoHome = () => {
        this.props.history.push('/home/' + this.props.match.params.id);
    }

    render() {
        var {isLoaded, reclamos} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <h1>Consulta de Reclamos</h1>

                    <div className="jumbotron">
                            <div className="form-group">
                                <label htmlFor="input" className="col-form-label">Número de reclamo</label>
                                <input type="text" pattern="[0-9]*" className="form-control" placeholder="Ingrese número del reclamo" id="input" 
                                    name= "idReclamo" onChange={this.onInputReclamo} value={this.state.idReclamo}/>
                            </div>

                            <button className="btn btn-primary" onClick={this.onSearch}>Buscar</button>

                    </div>
                    
                    <table className="table table-bordered table-responsive-md table-striped text-center" >
                        {/*Cabecera*/}
                        <thead className="table-primary">
                            <tr>
                            <th scope="col">Nro Reclamo </th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Fecha Creación </th>
                            <th scope="col">Estado </th>
                            <th scope="col">Ver </th>
                            </tr>
                        </thead>

                        {/*Filas*/}
                        <tbody>
                            {reclamos.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td>{item.fecha}</td>
                                <td>{item.estado}</td>
                                <td onClick={this.handlerClickItem.bind(this, item.id)} style={{ textDecoration: 'underline', color: 'blue' }}>VER</td>  
                            </tr>  
                            ))}
                        </tbody>
                    
                    </table>

                    <div>
                        <button className="btn btn-primary" onClick={this.onGoHome}>Volver al Home</button>
                    </div>

                </div>
            );
        }
    }
}

export default Reclamos;