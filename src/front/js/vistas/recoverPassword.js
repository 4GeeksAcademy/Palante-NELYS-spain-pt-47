import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import home from "../../img/home.jpg";


export const RecoverPassword = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: ""});
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Condiciona al usuario para completar los campos
    if (user.email.trim() === "") {
      setError("Rellene los campos requeridos.");
      return;
    }
    
}
const handleEmailChange = (e) => {
  setError(""); // Limpiar el error cuando se cambia el correo electrónico
  setUser({ ...user, email: e.target.value });
  
};
    
  
  return (
    
      <div className="contenedor">
        <div className="imagen user-login" style={{ backgroundImage: `url(${home})` }}>
          <div className="row principal-formulario">
            <div className="col-sm-12 col-md-4 formulario-user">
              <h1 className="titulo-user"><strong>Pa'lante</strong></h1>
              <form className="form-inputs" onSubmit={handleSubmit}>
                <div className="container-inputs">
                  <div className="detalle-input">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="exampleInputEmail1"
                      placeholder="Correo Electrónico"
                      aria-describedby="emailHelp"
                      value={user.email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  
                </div>
                <button className="boton-login" onClick={() => actions.reset_password(user.email)}>Restablecer contraseña</button>
                <div id="alertContainer">
                    <div class="custom-alert1" id="customAlert1"></div>
                </div>
              </form>
              
            </div>
            <div class="col-sm-12 col-md-8"></div>
            
          </div>
        </div>
      </div>
    
  )
}