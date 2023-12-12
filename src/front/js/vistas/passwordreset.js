import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import home from "../../img/home.jpg";


export const Password_Reset = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [user, setUser] = useState({ password: "" });
    const [error, setError] = useState("");
    const { nuevo_token } = useParams();
    
    const guardar_contrasena = (nuevo_token, nuevaContraseña) => {
            
        fetch(`/passwordreset/${nuevo_token}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ new_password: nuevaContraseña }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
            // Redirige a la página de inicio de sesión después del éxito
            navigate('/login-user');
          })
          .catch(error => {
            console.error('Error:', error);
            // Manejar cualquier error que ocurra durante la solicitud
          });
      };
     
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Condiciona al usuario para completar los campos
      if (user.password.trim() === "") {
        setError("Rellene los campos requeridos.");
        return;
      }
  
      // Llamar a la función para restablecer la contraseña al enviar el formulario
      console.log(user)
      guardar_contrasena(nuevo_token,user.password);
    };
  
    const handleEmailChange = (e) => {
      setError(""); // Limpiar el error cuando se cambia el correo electrónico
      setUser({ ...user, password: e.target.value });
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
                      type="password"
                      className="form-control"
                      name="email"
                      id="exampleInputPassword"
                      placeholder="Escribir Nueva Contraseña"
                      aria-describedby="passwordHelp"
                      value={user.password}
                      onChange={handleEmailChange}
                    />
                  </div>
                  
                </div>
                <button className="boton-login">Guardar contraseña</button>
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