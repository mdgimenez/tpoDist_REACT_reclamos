import React, { Component } from 'react';

class ListaPisos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pisos: ''
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerPisosEdificio?id=' + this.props.usuarioId + '&edificioId=' + this.props.edificioId, {
            method: 'GET'
        }).then(response => response.json() )
        .then(result => {
            var { pisos } = this.state;
            if(pisos !== '') {
                this.setState({
                    pisos: ''
                });
            }
            this.setState({
                pisos: result
            });
        }).catch(error => {
            alert(error);
        });
    }

    handleChange({ target }) {
        this.props.handleChangePiso(target);
    }

    render() {
        var { pisos } = this.state;

        if(pisos !== '') {
            return(
                <div className="form-group">
                    <label htmlFor="SelectPiso">N° de piso: </label>
                    <select className="form-control" id="selectPiso" onChange={this.handleChange.bind(this)}>
                        <option>{this.props.piso}</option>
                        {
                            pisos.map(item => (
                                <option key={item.piso} data-isd={item.piso}>{item.piso}</option>
                            ))
                        }
                    </select>
                </div>
            );
        }
        else {
            return (
                <div>Pisos no disponibles</div>
            );
        }
    }
};

export default ListaPisos;