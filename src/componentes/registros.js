import React from  'react';

const Registro = ({registro}) => (
    <div className = "registro">
        <p>Nuevo Registro</p>
        <p>Nombre: <span>{registro.nombre}</span></p>
        <p>Sexo: <span>{registro.sexo}</span></p>
        <p>Correo: <span>{registro.correo}</span></p>
        <p>Usuario: <span>{registro.alias}</span></p>
        <p>Direccion: <span>{registro.direccion}</span></p>
        <p>Edad: <span>{registro.edad}</span></p>
        <p>CURP: <span>{registro.curp}</span></p>
        <p>NivelEstudios: <span>{registro.estudios}</span></p>
        <p>No.Celular: <span>{registro.celular}</span></p>
        <p>RegistroTransporte</p>
        <p>TipoLicencia: <span>{registro.licencia}</span></p>
        <p>No.Licencia: <span>{registro.n_licencia}</span></p>
        <p>TipoVehiculo: <span>{registro.vehiculo}</span></p>
        <p>MatriculaVehiculo: <span>{registro.matricula}</span></p>
        <p>TarjetaCirculacion: <span>{registro.circulacion}</span></p>
        <p>MedioTransporte: <span>{registro.tipo}</span></p>
        <p>RegistroTelefono</p>
        <p>Telefono Propio o Empresarial: <span>{registro.propietario}</span></p>
        <p>Factura o Ticket: <span>{registro.factura}</span></p>
        <p>Email: <span>{registro.email}</span></p>
        <p>Direccion MAC: <span>{registro.mac}</span></p>
        
    </div>
);


export default Registro;