import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./vistas/home";
import { Login_user } from "./vistas/login-user";
import { Signup_user } from "./vistas/signup-user";
import { Signup_freelancer } from "./vistas/signup-freelance";
import { Login_freelance } from "./vistas/login-freelance";
import injectContext from "./store/appContext";

import { User_information } from "./vistas/user-information";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { RecoverPassword } from "./vistas/recoverPassword";
import { TodoList } from "./vistas/todo-list";
import { Readings } from "./vistas/readings";
import { Podcast } from "./vistas/podcast";
import { Meditations } from "./vistas/meditations";
import { Perfil_user } from "./vistas/perfil_user";
import { Perfil_freelancer } from "./vistas/perfil_freelancer";
import { Favorites } from "./vistas/favorites";
import { Appointment } from "./vistas/appointment";
import { My_appointment } from "./vistas/my_appointment";
import { Events } from "./vistas/events";
import { Password_Reset } from "./vistas/passwordreset";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login_user />} path="/login-user" />
           
            <Route element={<Login_freelance />} path="/login-freelance" />
            <Route element={<User_information />} path="/user-information" />
            <Route element={<TodoList />} path="/todo-list" />
            <Route element={<Readings />} path="/readings" />
            <Route element={<Podcast />} path="/podcast" />
            <Route element={<Meditations />} path="/meditations" />
            <Route element={<Perfil_user />} path="/perfil_user" />
            <Route element={<Favorites />} path="/favorites" />
            <Route element={<Appointment/>} path="/appointment" />
            <Route element={<My_appointment/>} path="/my_appointment" />
            <Route element={<Perfil_freelancer />} path="/perfil_freelancer" />
            <Route element={<Signup_user />} path="/signup-user" />
            <Route element={<Signup_freelancer />} path="/signup-freelance" />
            <Route element={<Events/>} path="/events" />
            <Route element={<RecoverPassword/>} path="/recoverPassword"/>
            <Route element={<Password_Reset />} path="/passwordreset/:nuevo_token" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
