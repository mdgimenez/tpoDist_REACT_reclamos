import React,{Component} from 'react';
//import Combo from './Combo.js'
import Menu from './Menu.js'


class AltaReclamoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: '',
            descripcion: '',
            edificio:'',
            piso: '',
            lugarIncidencia: '',
            departamentoIncidencia: '',
            tipoIncidencia: ''
        }     
    } 
   
   onChange = e =>{
    console.log(e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value})
}

onSelect = e => {
    this.setState({[e.target.name]: e.target.value})
}
    
onSubmit = (e) =>{
    console.log(this.state)
} 

ShowTypeInc = () =>{
    switch(this.state.tipoIncidencia) {
        case 'areaCompartida':
           return <div className="form-group">
                    <label className="col-form-label" for="inputDefault">UBICACIÓN</label>
                    <input type="text" class="form-control" 
                    placeholder="Ingrese Ubicación (ej: garage, pasillo izquierdo del ascensor, pasillo de entrada, hall, etc)" 
                    id="inputDefault" name="lugarIncidencia" onChange= {this.onChange} value= {this.state.lugarIncidencia}
                    />
                </div>
        break;

        case 'departamento':
            return <div className="form-group">
                <label className="col-form-label" for="inputDefault">DEPARTAMENTO</label>
                <input type="text" class="form-control" 
                placeholder="Ingrese número de departamento" 
                id="inputDefault" name="departamentoIncidencia" onChange= {this.onChange} value= {this.state.departamentoIncidencia}
                />
            </div>
        break;
        default:
            return;
        break;
    }
}


    render(){
    
    return (
    <>
        <Menu/>
        
        <form onSubmit = {this.onSubmit} >
            
            <fieldset>
             
                <h1>Altas reclamo</h1>
                
                 
                <div className="form-group">
                    <label htmlFor="edificio">EDIFICIO</label>
                    <select className="form-control" id="exampleSelect1" name="edificio" onChange={this.onChange}
                    value={this.state.edificio}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="piso">PISO</label>
                    <select className="form-control" id="exampleSelect1" name="piso" onChange={this.onChange}
                    value={this.state.piso}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    
                </div>


                <fieldset className="form-group">
                    <label htmlFor= "lugarIncidencia">SELECCIONE EL LUGAR DE LA INCIDENCIA</label>
                        
                    <div className="form-check">
                             <label className ="form-check-label">
                           <input type="radio" className="form-check-input" name="tipoIncidencia" id="optionsRadios2" 
                          value="areaCompartida" onChange={this.onChange} /> Area compartida
                            </label>
                    </div>
                        
                        <div className="form-check">
                             <label className="form-check-label">
                           <input type="radio" className="form-check-input" name="tipoIncidencia" id="optionsRadios2" 
                          value="departamento"  onChange={this.onChange}/> Departamento
                          
                            </label>
                    </div>
                </fieldset>

            <div>
               
     
                {this.ShowTypeInc()}
                
                
            </div>


            <div className="form-group">
                    <label htmlFor="inputDefault" className="col-form-label">TÍTULO</label>
                    <input type="text" className="form-control" placeholder="Ingrese asunto del reclamo" id="inputDefault" 
                    name= "titulo" onChange={this.onChange} value={this.state.titulo} ></input>
                 </div>

                 <div className="form-group">
                    <label htmlFor="exampleTextarea">DESCRIPCIÓN</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3" placeholder="Ingrese descripcion del reclamo" 
                    name="descripcion" onChange={this.onChange} value={this.state.descripcion}></textarea>
                </div>            


                <div className="form-group">
                    <label htmlFor="exampleInputFile">ADJUNTAR IMAGEN</label>
                    <input type="file" className="form-control-file" id="exampleInputFile" 
                    aria-describedby="fileHelp" />
                    <small id="fileHelp" className="form-text text-muted">
                        Recomendación: Adjunte una foto en donde se muestre el incidente para poder brindarle una solución más rápida</small>
                </div>
 
                              
                <button type="submit" className="btn btn-primary" 
                 onClick={()=>alert('Operación Exitosa. Su número de reclamo es: ')}             
                > Enviar</button>
                </fieldset> 
            </form>
         </>
            );
    }
}

export default AltaReclamoForm;