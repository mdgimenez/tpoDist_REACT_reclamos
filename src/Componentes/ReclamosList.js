import React,{Component} from 'react';


class ReclamosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reclamos: '',
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


    render (){
        var {isLoaded, reclamos} = this.state;

        if(!isLoaded) {
            return <div>Loading...</div>
        }
        else {
        return (

            
            <>
                <table class="table table-bordered table-responsive-md table-striped text-center" >
                
                        <thead className="table-primary">
                            <tr>
                            <th scope="col">Nro Reclamo </th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Fecha Creación </th>
                            <th scope="col">Estado </th>
                            <th scope="col">Ver </th>
                            </tr>
                        </thead>

                        <tbody>
                        
                            
                                {reclamos.map(item =>(
                                    <tr>
                                <td>{item.id}</td>
                                <td>{item.titulo}</td>
                                <td>{item.fecha}</td>
                                <td>{item.estado}</td>
                                <td>VER</td>  
                                </tr>  
                                ))}
                            
                        
                        </tbody>
                        
                            
                        
                        
                        
                </table> 
            </>


        );
                                }
    }
}


export default ReclamosList;