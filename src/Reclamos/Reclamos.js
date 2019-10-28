import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Reclamos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            reclamos: [],
            isLoaded: false
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerTodosLosReclamos')
            .then(response => response.json())
            .then(result => {
                this.setState({
                    isLoaded: true,
                    reclamos: result
                });
            }).catch(error => {
                alert("Error en API " + error);
            });
    }
    
    handlerClickItem(id) {
        this.props.history.push('/reclamo/' + id)
    }

    render() {
        var {isLoaded, reclamos} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <ul className="listReclamos">
                        {
                            reclamos.map(item => (
                                <li 
                                    key = {item.id}
                                    onClick={this.handlerClickItem.bind(this, item.id)}
                                >
                                    <br></br>
                                        Numero de reclamo:{" "}{item.id}{" "}
                                        Estado:{" "}{item.estado}{" "}
                                        Fecha de reclamo:{" "}{item.fecha}{" "}
                                    <br></br>
                                </li>
                            ))
                        }
                    </ul>
                    <Link to = "/home">Home</Link>
                </div>
            );
        }
    }
}

export default Reclamos;