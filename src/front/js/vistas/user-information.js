import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Photo } from "../component/photoProfile";
import fondo from "/workspaces/spain_part_time47/src/front/img/logo_Perfil.jpg";

export const User_information = () => {

  const { store, actions } = useContext(Context)
  const [info, setInfo] = useState({})
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    actions.dataUser();
  }, []) // Ejecuta la accion para pintar los datos de usuario

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.updateData(info);
  } //Ejecuta la modificacion de los datos

  useEffect(() => {
    setInfo({
      full_name: store.datauser.full_name,
      email: store.datauser.email,
    });
  }, [store.datauser]) //Toma los datos nuevos que ingresa el usuario y se ejecuta cada vez que se modfica el store

  const handleEditClick = () => {
    setIsEditing(true);
  };
  return (
    <div className="container-fluid">
      <div className="jumbotron" >
        <img className="perfil_informacion" src={fondo}/>
        <div className="perfil-saludo"><strong>Datos Personales</strong></div>
      </div>

      <div className="row linea-datos">
        <nav className="navbar expand-lg" id="informacion-personal">
          <h3 className="texo-informacion"><i className="fa fa-circle-info"></i>información básica</h3>
        </nav>
        <div className="col-6" >
          <form className="form-data" onSubmit={handleSubmit} >
            <div className="detalle-input">
              <input
                type="name"
                className="form-control"
                name="full_name"
                id="exampleInputName1"
                placeholder="Nombre Completo"
                aria-describedby="emailHelp"
                value={info.full_name || ""}
                onChange={(e) => setInfo({ ...info, full_name: e.target.value })}
                disabled={!isEditing} //Pinto el valor "full_name" del usuario logeado que tengo almacenado en el store 
              />
              <button className="modificar-datos" onClick={handleEditClick}>
                <i className="fa fa-pencil"></i>
              </button>
            </div>
            <div className="detalle-input">
              <input
                type="email"
                className="form-control"
                name="email"
                id="exampleInputEmail1"
                placeholder="Correo Electrónico"
                aria-describedby="emailHelp"
                value={info.email || ""}
                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                disabled={!isEditing} //Pinto el valor "email" del usuario logeado que tengo almacenado en el store
              />
            </div>
            <button className="boton-actualizar">Actualizar</button>
          </form>
        </div>
        <div className="col-6">
          <Photo />
        </div>
      </div>
    </div>
  )
}