import React,{Component} from 'react';
import MenuInicioSesion from './MenuInicioSesion.js';
//import ..


class LoginUsuario extends Component{

    onSubmit=(e)=> {console.log(this.state)
                    e.preventDefault();
                     window.location.href = "/home";
                } 

    state={
        tipoDNI: '',
        numeroDoc:'',
        usuario: '',
        password: '',
    }


    onChange =e=> {
        console.log(e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
            return(
            <>
               <MenuInicioSesion/>              
                <div>                                                                         
                 <form className="jumbotron" onSubmit= {this.onSubmit}>
                    <h1>Inicio Sesión</h1>

                    <div className="form-group">
                    <label htmlFor="tipoDNI">Tipo documento</label>
                    <select multiple="" className="form-control" id="tipoDNI"
                    name= "tipoDNI" onChange = {this.onChange} value= {this.state.tipoDNI}
                    >
                        <option>DNI</option>
                        <option>CI</option>
                        <option>CC</option>
                        <option>TI</option>
                        <option>TP</option>
                        <option>RC</option>
                        <option>CE</option>
                        <option>CI</option>
                        <option>DUI</option>
                        <option>ID</option>
                    </select>
                </div>



                    <div className="form-group">
                            <label htmlFor="Ingrese DNI">Número de documento</label>
                                <input type="DNI" className="form-control" id="Ingrese DNI" 
                                placeholder="Ingrese numero de documento" name="numeroDoc" onChange={this.onChange} 
                                value={this.state.numeroDoc} />
                    </div> 
                        
                        <div className="form-group">
                            <label htmlFor="InputPassword1">Password</label>
                            <input type="password" className="form-control" 
                            id="InputPassword1" placeholder="Password"
                            name= "password"  onChange = {this.onChange} value={this.state.password}
                            />
                        </div>

                    <div>
                        <br></br>

                        <button type="submit" className="btn btn-primary" 
                        
                        >Iniciar Sesión</button>
                        
                    
                    </div>
                </form> 
        </div>
        </>
        );
    }

}
export default LoginUsuario;

   
                 