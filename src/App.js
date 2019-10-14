import React from 'react';
import Menu from './componentes/Menu.js';
import AltaReclamoForm from './componentes/AltaReclamoForm.js';

function App() {
  return(
    <div className="App">
       <Menu></Menu>
       <div className="jumbotron">
          <AltaReclamoForm></AltaReclamoForm>
    </div>
    </div>
  );
}

export default App;
