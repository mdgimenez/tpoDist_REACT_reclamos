import React,{Component} from 'react';



class Combo extends Component{

    render(){
        return(
            <div className="form-group">
                    <label for="edificioCombo">Edificios</label>
                    <select multiple="" className="form-control" id="edificioCombo">
                        <option>Brandsen 776</option>
                        <option>Monserrat 33</option>
                        <option>Patagones 2550</option>
                        <option>Crovara 7464</option>
                    </select>
                </div>
        );
    }
}

export default Combo;