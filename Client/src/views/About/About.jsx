import React from "react";
import style from "./About.module.css";
import NavBar from "../../components/NavBar/NavBar";


export default function About(props){
    return(
       <div>
         <NavBar/>
        <h1 className={style.container}>
           Hola soy J Ignacio Bruna 
        </h1>
        <p>Bienvenidos a mi primer SPA</p>
       
       </div> 
    )
}