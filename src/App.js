import React, {Fragment, useState} from 'react';
import Formulario from './componentes/formulario';
import Transporte from './componentes/formTransporte';
import Telefono from './componentes/formTel';
import Registro from './componentes/registros';
import Delivery from './imagen/Delivery.jpg';

function App() {
  //Arreglo de Registro
  const [registros,guardarRegistro] = useState([]);
// haciendo
 

  // Funcion que toma el registro actual y agrega un nuevo
  const crearRegistro = registro => {
    console.log(registro)
    guardarRegistro([
      ...registros,
      registro
    ]); 
  }
  
  return (
    <div className="App">
      <h1><center>Servicio Delivery
      <br></br>
      <img src={Delivery} width="500" height="300"/></center></h1>
         <br></br>
         <Fragment>
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <Formulario
                  crearRegistro={crearRegistro}
                />
              </div>
              
              <div className="one-half column">
              <Transporte
                  crearRegistro={crearRegistro}
                />
              </div>
        </div>
      </div>
      </Fragment>
      <br></br>
      <Fragment>
      <div className="container">
      <div>
        
          <div className="one-half column">
          <Telefono
              crearRegistro={crearRegistro}
            />
          </div>
          
          <div className="one-half column">
            <h2>Registro</h2>
            {registros.map(registro=>(
              <Registro
                key={registro.id}
                registro={registro}
              />
            ))}
          </div>
          </div>
          </div>
      </Fragment>
      </div>
  );
}

export default App;
