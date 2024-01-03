import React from "react";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import axios from "axios";



const Home = () =>{
    const [characters, setCharacters] = useState([]);

    function onClose(id){
        setCharacters(characters.filter((element) => element.id !== id));
      }

      async function onSearch(character){
        try {
          const { data } = await axios (`http://localhost:3001/rickandmorty/character/${character}`)
            if(data.name){
              setCharacters((oldChars) => [...oldChars, data]);
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