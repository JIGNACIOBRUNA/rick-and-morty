import { useState } from "react";
import style from "./searchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");

   const handleSearch = (event) => {
      let {value} = event.target;
      setCharacter(value);
   };

   return (
      <div className={style.container}>
         <input className={style.search} type='search' onChange={handleSearch}/> 
         <button className={style.button} onClick={() => props.onSearch(character)}>Agregar</button> 
      </div> 
   );
}
// agregamos props.onSearch a onClick para agregar el boton a nuestra pagina y que este quede funcional