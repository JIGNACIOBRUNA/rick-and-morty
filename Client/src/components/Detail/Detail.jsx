import React from "react";
import {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";


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
        <div>
            <button onClick={navegar}> Ir a Home</button>
            <h1>NAME: {character.name}</h1>
            <div>
                <h2>STATUS: {character.status}</h2>
                <h2>ESPECIE: {character.species}</h2>
                <h2>GENERO: {character.gender}</h2>
                <h2>ORIGEN: {character.origin?.name}</h2>
            </div>
            <img src={character.image} alt= "img not found"/>
        </div>

    )
}