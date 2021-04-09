import React, {Fragment, useState} from 'react';
const Telefono = ({crearRegistro}) => {

    // creando los State de datos de telefono
    const [registro, actualizarRegistro] = useState({
        propietario:'',
        factura:'',
        email:'',
        mac:'',
        
    });
    const [error, actualizarError] = useState(false)

    //Funcion que se ejecuta cuando se escribe en un input

    const actualizarState = e =>{
        actualizarRegistro ({
            ...registro,
            [e.target.name]: e.target.value
        })
    }

    // Extraer Valores
    const {propietario, factura, email, mac} = registro;

    // CUando el usuario precione enviar 
    const submitRegistro = e => {
        e.preventDefault();

    // Validar
    if (propietario.trim()==='' || factura.trim()=== '' ||  email.trim()=== '' 
        || mac.trim()=== ''){
        actualizarError(true);
        return;
    }
    //Eliminar mensaje previo
    actualizarError(false);

    // Crear el registro
    crearRegistro(registro);

    //Reiniciar el form
    actualizarRegistro({
        propietario:'',
        factura:'',
        email:'',
        mac:'',
    })

    }

    return (
        <Fragment>
            <h2>Registro Telefonico</h2>
            {error ? <p className= "alerta-error">Todos los campos son obligatorios</p>
            :null}
            <form
                onSubmit = {submitRegistro}
            >
                <label>Propietario del telefono</label>
                <input
                    type="text"
                    name="propietario"
                    id="propietario"
                    className="u-full-widht"
                    placeholder="Propio / Empresa"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Numero de Factura</label>
                <input
                    type="text"
                    name="factura"
                    id="factura"
                    className="u-full-widht"
                    placeholder="No. Factura"
                    onChange={actualizarState}
                    value={factura}

                />
                <label>Email</label>
                 <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {email}
                />
               <label>Direccion MAC</label>
                 <input
                    type="text"
                    name="mac"
                    id="mac"
                    placeholder="MAC del telefono"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {mac}

                />
                <br></br>
                <button
                    type="submit"
                    className="u-full-widht button-primary">
                    Agregar Datos</button>
            </form>

        </Fragment>
    );
}

export default  Telefono;