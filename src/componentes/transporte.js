import React, {Fragment, useState} from 'react';
import Transporte from './componentes/formTransporte';



function Transporte() {

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
    <Fragment>
      <h1>Registro de Transporte</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearTransporte={crearTransporte}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {transportes.map(transporte=>(
              <Transporte
                key={trasnporte.id}
                trasnporte={transporte}
                cabiarCel={cambiarCel}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Transporte;
