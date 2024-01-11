import React from "react";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import style from "./Detail.module.css";


export default function Detail(){
    const {detailId} = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

function navegar(){
    navigate("/home")
}

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return(
        <div className={style.fondo}>
            <NavBar/>
            <button className={style.button} onClick={navegar}> Ir a Home</button>
            <div className={style.contenedor}>
              <h1 className={style.title}>Name: {character.name}</h1>
              <div className={style.text}>
                  <h2>Status: {character.status}</h2>
                  <h2>Especie: {character.species}</h2>
                  <h2>Genero: {character.gender}</h2>
                  <h2>Origen: {character.origin?.name}</h2>
              </div>
              <img  className={style.image} src={character.image} alt= "img not found"/>
          </div>
        </div>

    )
}