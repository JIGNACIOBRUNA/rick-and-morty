import React from "react";
import logo from "../../image/salir.png"
import style from "./Logout.module.css"


const LogoutButton = () => {

  const handleLogout = () => {
    window.location.reload();
  };

  return (
    <button className={style.button} onClick={handleLogout} >
        <img  className={style.imagen} src={logo} alt="Logo"  />
    </button>
  );
};

export default LogoutButton;
