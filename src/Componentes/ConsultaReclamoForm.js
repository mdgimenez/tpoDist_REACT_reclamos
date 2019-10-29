import React,{Component} from 'react';
import Menu from './Menu.js';
import ReclamosList from './ReclamosList.js'


class ConsultaReclamoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nroReclamo: '',
            estadoReclamo: ''           
        }     
    } 

   
    onSelect = (e) => {
       
        this.setState({[e.target.name]: e.target.value  })
        

    }

    onChange = (e) =>{
        console.log( e.target.name, e.target.value)
        this.setState({[e.target.name]: e.target.value  })
    }

    onSubmit = (e) =>{
        console.log(this.state)
        
    } 

    render(){
        return(
            <>
                <Menu/>

                   <h1>Consulta de reclamos</h1>

                    <form  onSubmit= {this.onSubmit}>
                        
                        <div className="jumbotron">
                            <div className="form-group">
                                <label htmlFor="inputDefault" className="col-form-label">Número de reclamo</label>
                                <input type="text" className="form-control" placeholder="Ingrese número del reclamo" id="inputDefault" 
                                name= "nroReclamo" onChange={this.onChange} value={this.state.nroReclamo} ></input>
                            </div>
                                

                            <button type="submit" className="btn btn-primary"> Buscar
                            </button>

                        </div>

                      <ReclamosList/>      
                        
                    </form>

                    

             </>

        );
    }
  

}

export default ConsultaReclamoForm;