import React, {useState} from 'react';
// import { withRouter } from 'react-router-dom';



const Formulario = ({crearRegistro}) => {

    // creando los State de Citas
    const [registro, actualizarRegistro] = useState({
        nombre:'',
        sexo:'',
        corrreo:'',
        alias:'',
        direccion:'',
        edad:'',
        curp:'',
        estudios:'',
        celular:''
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
    const {nombre, sexo, correo, alias, direccion, edad, curp, estudios, celular} = registro;

    // CUando el usuario precione enviar registro
    const submitRegistro = e => {
        e.preventDefault();

    // Validar
    if (nombre.trim()==='' || sexo.trim()=== '' ||  correo.trim()=== '' 
        || alias.trim()=== '' || direccion.trim()=== '' || edad.trim()=== '' 
        || curp.trim()=== ''|| estudios.trim()=== ''|| celular.trim()=== ''){
        actualizarError(true);
        return;
    }
    //Eliminar mensaje previo
    actualizarError(false);

    // Crear la registro
    crearRegistro(registro);

    //Reiniciar el form
    actualizarRegistro({
        nombre:'',
        sexo:'',
        correo:'',
        alias:'',
        direccion:'',
        edad:'',
        curp:'',
        estudios:'',
        celular:''
    })

    }

    return (
        <div>
            <h2>Nuevo Registro</h2>
            {error ? <p className= "alerta-error">Todos los campos son obligatorios</p>
            :null}
            <form
                onSubmit = {submitRegistro}
            >
                <label>Nombre </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="u-full-widht"
                    placeholder="Nombre"
                    onChange={actualizarState}
                    value={nombre}
                />
                <label>Sexo</label>
                <input
                    type="text"
                    name="sexo"
                    id="sexo"
                    className="u-full-widht"
                    placeholder="Masculino / Femenino"
                    onChange={actualizarState}
                    value={sexo}

                />
                <label>Correo Electronico</label>
                 <input
                    type="email"
                    name="correo"
                    id="correo"
                    className="u-full-widht"
                    placeholder="Ingresa tu Email"
                    onChange={actualizarState}
                    value = {correo}
                />
                <label>Usuario para plataforma</label>
                 <input
                    type="text"
                    name="alias"
                    id="alias"
                    className="u-full-widht"
                    placeholder="Nombre para plataforma"
                    onChange={actualizarState}
                    value = {alias}
                />
                <label>Direccion de domicilio actual</label>
                 <input
                    type="text"
                    name="direccion"
                    id="direccion"
                    className="u-full-widht"
                    placeholder="direccion"
                    onChange={actualizarState}
                    value = {direccion}
                />
                 <label>Edad</label>
                 <input
                    type="text"
                    name="edad"
                    id="edad"
                    className="u-full-widht"
                    placeholder="Ingresa tu edad"
                    onChange={actualizarState}
                    value = {edad}
                />
                 <label>CURP</label>
                 <input
                    type="text"
                    name="curp"
                    id="curp"
                    className="u-full-widht"
                    placeholder="curp"
                    onChange={actualizarState}
                    value = {curp}
                />
                 <label>Nivel de estudios</label>
                 <input
                    type="text"
                    name="estudios"
                    id="estudios"
                    className="u-full-widht"
                    placeholder="estudios"
                    onChange={actualizarState}
                    value = {estudios}
                />
                 <label>Numero de celular</label>
                 <input
                    type="text"
                    name="celular"
                    id="celular"
                    className="u-full-widht"
                    placeholder="celular"
                    onChange={actualizarState}
                    value = {celular}
                />
                <br></br>
                <button
                    type="submit"
                    className="u-full-widht button-primary">
                    Agregar Datos</button>
            </form>

            </div>
    );
}

export default Formulario;