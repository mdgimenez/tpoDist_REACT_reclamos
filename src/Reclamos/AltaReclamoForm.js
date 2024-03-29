import React, { Component } from 'react';
import ListaPisos from './ListaPisos';
import ListaUnidades from './ListaUnidades';
import Menu from './Menu';

class AltaReclamoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            titulo: '',
            descripcion: '',
            edificios: '',
            edificio: 'Seleccione...',
            edificioId: '',
            lugar: 'Seleccione...',
            piso: 'Planta Baja',
            unidad: 0,
            imagen: {
                numero: 0,
                binary: [],
                tipo: '',
                idReclamo: 0
            },
            imagenes: []
        }
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/ar/VerEdificios?id=' + this.props.match.params.id, {
            method: 'GET'
        }).then(response => response.json() )
        .then(result => {
            this.setState({
                isLoaded: true,
                edificios: result
            });
        }).catch(error => {
            alert(error);
        });
    }

    onChangeTitulo = (titulo) => {
        this.setState({
            titulo: titulo.target.value
        });
    }

    onChangeDescripcion = (descripcion) => {
        this.setState({
            descripcion: descripcion.target.value
        });
    }

    onSelectedEdificio = (e) => {
        let idx = e.target.selectedIndex;
        let dataset = e.target.options[idx].dataset;
        this.setState({
            edificio: dataset.isd,
            edificioId: dataset.id,
            lugar: 'Seleccione...',
            piso: 'Planta Baja',
            unidad: 0
        });
    }

    onChangePiso = (e) => {
        let idx = e.selectedIndex;
        let dataset = e.options[idx].dataset;
        this.setState({
            piso: dataset.isd
        });
    } 

    onChangeLugar = (e) => {
        let idx = e.target.selectedIndex;
        let dataset = e.target.options[idx].dataset;
        this.setState({
            lugar: dataset.isd
        });
    }

    onChangeUnidad = (e) => {
        let idx = e.selectedIndex;
        let dataset = e.options[idx].dataset;
        this.setState({
            unidad: dataset.isd
        });
    }

    onChangeImagen = async (e) => {
        var files = e.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    imagen: 
                    {
                        ...this.state.imagen,
                        binary: btoa(e.target.result),
                        tipo: file.type
                    }
                });
                this.setState({ imagenes: this.state.imagenes.concat(this.state.imagen) });
            };
            reader.readAsBinaryString(file);
        }
    }

    onSubmit= async (e) => {
        e.preventDefault();
        var { titulo, descripcion, lugar, edificioId, piso, unidad, imagenes } = this.state;
        await fetch('http://localhost:8080/ar/AltaReclamo', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                id: -1,
                userId: this.props.match.params.id,
                codigoEdificio: edificioId,
                piso,
                ubicacion: lugar,
                titulo,
                descripcion, 
                estado: 'Pendiente',
                idUnidad: unidad
            }),
        }).then(response => response.json() )
        .then(result => {
            alert(`Su numero de reclamo es N°${result}`);
            if(imagenes.length > 0) {
                this.onSubmitImagen(e, result);
            }
            else {
                this.props.history.push('/reclamos/' + this.props.match.params.id)
            }
        }).catch(error => {
            alert(error);
        })
    }

    onSubmitImagen = async(e, idReclamo) => {
        var { imagenes } = this.state;
        imagenes.map(item => (
            fetch('http://localhost:8080/ar/GuardarImagen', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    numero: 0,
                    binary: item.binary,
                    tipo: item.tipo,
                    idReclamo: idReclamo
                }),
            }).then(
                alert('Imagen subida con éxito'),
                this.props.history.push('/reclamos/' + this.props.match.params.id)
            )
            .catch(error => {
                alert(error);
            })
        ))
    }

    render(){
        var { isLoaded, edificios, lugar, edificioId, piso, unidad, titulo, descripcion, imagenes } = this.state;
        
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
                    <h1>Alta reclamo</h1>
                    
                    <div className="jumbotron">
                          
                        <div className="form-group">
                            <label htmlFor="SelectEdificio">Seleccione edificio: </label>
                            <select className="form-control" id="selectEdificio" onChange={this.onSelectedEdificio}>
                                <option>{this.state.edificio}</option>
                                {
                                    edificios.map(item => (
                                        <option key={item.codigo} data-isd={item.nombre} data-id={item.codigo}>{item.nombre}</option>
                                    ))
                                }
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="SelectLugar">Lugar del desperfecto: </label>
                                <select className="form-control" id="selectLugar" onChange={this.onChangeLugar}>
                                    <option>{this.state.lugar}</option>
                                    <option data-isd={"Entrada"}>Entrada</option>
                                    <option data-isd={"Pasillo"}>Pasillo</option>
                                    <option data-isd={"Ascensor"}>Ascensor</option>
                                    <option data-isd={"Escaleras"}>Escaleras</option>
                                    <option data-isd={"Terraza"}>Terraza</option>
                                    <option data-isd={"Estacionamiento"}>Estacionamiento</option>
                                    <option data-isd={"Unidad"}>Unidad</option>
                                    <option data-isd={"Otro lugar"}>Otro lugar</option>
                                </select>
                        </div> 

                        {/* Obtengo los pisos asociados al usuario */}
                        {edificioId !== '' && (lugar === 'Pasillo' || lugar === 'Unidad') &&
                            <ListaPisos
                                usuarioId={this.props.match.params.id}
                                piso={piso}
                                edificioId={edificioId}
                                handleChangePiso={this.onChangePiso.bind(this)}
                            />
                        }
                        
                        {/* Obtengo las unidades asociadas al usuario */}
                        {lugar === 'Unidad' && piso !== 'Planta Baja' &&
                           <ListaUnidades 
                                usuarioId={this.props.match.params.id}
                                edificioId={edificioId}
                                piso={piso}
                                unidad={unidad}
                                handleChangeUnidad={this.onChangeUnidad.bind(this)}
                           />
                        }

                        {/* Convertir una imagen a base64 */}
                        <div className="form-group">
                            <label>Opcional:</label>
                            <br></br>
                            <label htmlFor="inputImagen">Seleccionar archivo:</label>
                            <br></br>
                            <input type="file" id="InputImagen" onChange={this.onChangeImagen} />
                            <br></br>
                            <small id="fileHelp" className="form-text text-muted">Recomendación: adjuntar foto en donde se vea el desperfecto para poder brindarle una solución más rápida.</small>
                            <small>Usted a seleccionado: {imagenes.length} imagen/es</small>
                        </div> 

                        <div className="form-group">
                            <label htmlFor="InputTitulo">Titulo de reclamo:</label>
                                <input type="text" className="form-control" id="inputTitle" placeholder="Titulo..." value={titulo} onChange={this.onChangeTitulo} />
                        </div> 
    
                        <div className="form-group">
                            <label htmlFor="textarea">Descripcion:</label>
                            <textarea className="form-control" id="descripcion" rows="3" placeholder="Descripcion..." value={descripcion} onChange={this.onChangeDescripcion}></textarea>
                        </div>
    
                        <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>

                    </div> 
                </>
            );
        }
    }
}

export default AltaReclamoForm;