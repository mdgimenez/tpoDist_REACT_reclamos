import React, { Component } from 'react';

class ListaUnidades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unidades: ''
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerUnidadesUsuario?id='+ this.props.usuarioId + '&edificioId=' + this.props.edificioId + '&piso=' + this.props.piso, {
            method: 'GET'
        }).then(response => response.json() )
        .then(result => {
            var { unidades } = this.state;
            if(unidades !== '') {
                this.setState({
                    unidades: ''
                })
            }
            this.setState({
                unidades: result
            });
        }).catch(error => {
            alert(error);
        });
    }

    handleChange({ target }) {
        this.props.handleChangeUnidad(target);
    }

    render() {
        var { unidades } = this.state;

        if(unidades !== '') {
            return (
                <div className="form-group">
                    <label htmlFor="SelectUnidad">N° de unidad: </label>
                    <select className="form-control" id="selectUnidad" onChange={this.handleChange.bind(this)}>
                        <option>Seleccione...</option>
                        {
                            unidades.map(item => (
                                <option key={item.unidad} data-isd={item.unidad}>{item.unidad}</option>
                            ))
                        }
                    </select>
                </div>
            );
        }
        else {
            return (
                <div>Unidades no disponibles</div>
            );
        }
    }
};

export default ListaUnidades;