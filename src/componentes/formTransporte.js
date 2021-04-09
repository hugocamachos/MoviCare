import React, {Fragment, useState} from 'react';

const Transporte = ({crearRegistro}) => {

    // creando los State de Transporte
    const [registro, actualizarRegistro] = useState({
        licencia:'',
        n_licencia:'',
        vehiculo:'',
        matricula:'',
        tarjeta:'',
        tipo:''
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
    const {licencia, n_licencia, vehiculo, matricula, tarjeta, tipo} = registro;

    // CUando el usuario precione enviar 
    const submitRegistro = e => {
        e.preventDefault();

    // Validar
    if (licencia.trim()==='' || n_licencia.trim()=== '' ||  vehiculo.trim()=== '' 
        || matricula.trim()=== '' || tarjeta.trim()=== '' || tipo.trim()=== ''){
        actualizarError(true);
        return;
    }
    //Eliminar mensaje previo
    actualizarError(false);

    // Crear la registro
    crearRegistro(registro);

    //Reiniciar el form
    actualizarRegistro({
        licencia:'',
        n_licencia:'',
        vehiculo:'',
        matricula:'',
        tarjeta:'',
        tipo:''
    })

    }

    return (
        <Fragment>
            <h2>Registro de Transporte</h2>
            {error ? <p className= "alerta-error">Todos los campos son obligatorios</p>
            :null}
            <form
                onSubmit = {submitRegistro}
            >
                <label>Tipo de Licencia</label>
                <input
                    type="text"
                    name="licencia"
                    id="licencia"
                    className="u-full-widht"
                    placeholder="Licencia"
                    onChange={actualizarState}
                    value={licencia}
                />
                <label>Numero de Licencia</label>
                <input
                    type="text"
                    name="n_licencia"
                    id="n_licencia"
                    className="u-full-widht"
                    placeholder="No. Licencia"
                    onChange={actualizarState}
                    value={n_licencia}

                />
                <label>Tipo de Vehiculo</label>
                 <input
                    type="text"
                    name="vehiculo"
                    id="vehiculo"
                    placeholder="Vehiculo"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {vehiculo}
                />
               <label>Matricula de Vehiculo</label>
                 <input
                    type="text"
                    name="matricula"
                    id="matricula"
                    placeholder="Matricula"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {matricula}

                />
               <label>Tarjeta de Circulacion</label>
                 <input
                    type="text"
                    name="tarjeta"
                    id="tarjeta"
                    placeholder="No. tarjeta"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {tarjeta}
                />
                 <label>Medio de transporte de los articulos</label>
                 <input
                    type="text"
                    name="tipo"
                    id="tipo"
                    placeholder="Transporte"
                    className="u-full-widht"
                    onChange={actualizarState}
                    value = {tipo}
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

export default  Transporte;