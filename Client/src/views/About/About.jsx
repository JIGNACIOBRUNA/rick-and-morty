import React from "react";
import style from "./About.module.css";
import NavBar from "../../components/NavBar/NavBar";


export default function About(){
    return (
      <div className={style.fondo}>
        <NavBar />
        <div className={style.container}>
          <h1 className={style.title}>Hola soy J Ignacio Bruna</h1>
          <div className={style.text}>
            <p>Estoy emocionado de compartir contigo mi primer proyecto SPA.</p>
            <p>
              Este proyecto fue una oportunidad emocionante para explorar las
              tecnologías modernas de desarrollo web y aprender sobre cómo
              construir aplicaciones interactivas y dinámicas.
            </p>
            <p>
              Características clave de mi proyecto:
              <ul>
                <li>
                  Desarrollado utilizando Javascript, React, Redux, Nodejs,
                  Express, Sequelize y PostgreSQL.
                </li>
                <li>Una interfaz de usuario amigable e intuitiva.</li>
                <li>
                  Implementación de una navegación fluida y sin recargas de
                  página.
                </li>
                <li>Integración de favoritos y filtros combinados.</li>
              </ul>
            </p>
            <p>
              A lo largo del proceso de desarrollo, enfrenté desafíos
              emocionantes y aprendí valiosas lecciones que mejoraron mis
              habilidades como desarrollador web.
            </p>
            <p>
              Estoy ansioso de seguir creciendo y expandiendo mis conocimientos
              en el emocionante mundo del desarrollo web. ¡Gracias por visitar y
              explorar mi proyecto SPA!
            </p>
          </div>
        </div>
      </div>
    );
}