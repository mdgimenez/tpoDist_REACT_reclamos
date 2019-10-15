import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class AltaReclamoForm extends Component {

  render(){
    
    return (
        <form> 
            <fieldset>
                <h1>Alta reclamo</h1>
                
                <div className="form-group">
                    <label for="exampleInputEmail1">Titulo de reclamo: </label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="titulo" />
                </div> 

                <div className="form-group">
                    <label for="textarea">Descripcion: </label>
                    <textarea className="form-control" id="descripcion" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label for="exampleSelect1">Seleccione edificio: </label>
                    <select className="form-control" id="exampleSelect1">
                        <option>SLS Puerto Madero</option>
                        <option>The Link Towers</option>
                        <option>The Fire Place</option>
                        <option>Alvear Tower</option>
                        <option>Dique Dos</option>
                        <option>Libertador Plaza</option>
                        <option>Chateau Libertador</option>
                        <option>The Tower</option>
                        <option>Lizard Plaza</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Lugar del desperfecto: </label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="n° unidad / lugar" />
                </div> 

                <div className="form-group">
                    <label for="exampleInputEmail1">N° de piso: </label>
                        <input type="text" className="form-control" id="inputTitle" placeholder="" />
                </div> 

                <div className="form-group">
                    <label for="exampleTextarea">Example textarea</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div> 

                <div className="form-group">
                    <label for="inputFile">Seleccionar archivo: </label>
                    <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                    <br></br>
                    <small id="fileHelp" className="form-text text-muted">Por favor seleccione una foto en donde se vea el desperfecto para poder brindarle una solución más rápida.</small>
                </div> 

                <button type="submit" className="btn btn-primary">Submit</button>
                <br></br>
                <Link to = "/home">Volver</Link>
            </fieldset> 
        </form>
        );
    }
}

export default AltaReclamoForm;