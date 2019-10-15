import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class AltaReclamoForm extends Component {

  render(){
    
    return (
        <form> 
            <fieldset>
                <h1>Alta usuario</h1>
               
                <div className="form-group row">
                        <div className="form-group">
                            <label for="ingresoDI">Ingrese su Documento de Indentidad </label>
                            <select className="form-control" id="ingresoDI">
                                <option>CI</option>
                                <option>CPA</option>
                                <option>DNI</option>
                            </select>
                            <input type="text" className="form-control" id="inputDI" placeholder="12345678" />
                        </div>
                </div> 
                
                <div className="form-group">
                    <label for="exampleInputPassword1">Ingrese una contraseña </label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="contraseña" />
                </div> 
                
                <div>
                    <button type="registrar" className="btn btn-primary">Registrarse</button>
                </div>
                
                <div>
                    <Link to = "/home">Volver</Link>
                </div>
                
            </fieldset> 
        </form>
        );
    }
}

export default AltaReclamoForm;