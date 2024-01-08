import React from "react";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../components/redux/action";
import axios from "axios";

const Home = () =>{
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.allCharacters);

  const onClose = (id) => {
    dispatch(removeCard(id));
  };

  const onSearch = async (character) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${character}`);
      if (data.name && !characters.some((char) => char.id === data.id)) {
        dispatch(addCard(data));
      } else if (characters.some((char) => char.id === data.id)) {
        alert("Ese personaje ya fue agregado");
      }
    } catch (error) {
      alert('No hay personajes con ese ID');
    }
  };
    return(
        <div>
            <NavBar onSearch={onSearch} />
            <div className={style.homeContainer}>
              <Cards characters={characters || []} onClose ={onClose}/>
            </div>
        </div>

    )
};

export default Home; 