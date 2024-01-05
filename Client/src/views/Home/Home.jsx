import React from "react";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";

const Home = () =>{
    const [characters, setCharacters] = useState([]);
    const [addedCharacters, setAddedCharacters] = useState([]);

    function onClose(id){
        setCharacters(characters.filter((element) => element.id !== id));
        setAddedCharacters((oldAddedChars) => oldAddedChars.filter(charId => charId !== id));
      }

      async function onSearch(character){
        try {
          const { data } = await axios (`http://localhost:3001/rickandmorty/character/${character}`);
            if(data.name && !addedCharacters.includes(data.id)){
              setCharacters((oldChars) => [...oldChars, data]);
              setAddedCharacters((oldAddedChars) => [...oldAddedChars, data.id]);
            }else if(addedCharacters.includes(data.id)){
              alert("Ese personaje ya fue agregado");
            }
          } catch (error) {
             alert('No hay personajes con ese ID');
          }
        }
    return(
        <div>
            <NavBar onSearch={onSearch} />
            <div className={style.homeContainer}>
              <Cards characters={characters} onClose ={onClose}/>
            </div>
        </div>

    )
}

export default Home; 