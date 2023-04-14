import { useState } from "react";
import style from "./searchBar.module.css"

export default function SearchBar(props) {
   const [character, setCharacter] = useState(0);

   const handleSearch = (event) => {
      let {value} = event.target;
      setCharacter(value);
   };

   return (
      <div className={style.div}>
          <input className={style.search} type='search' onChange={handleSearch}/> 
      <button className={style.buttonSearch} onClick={() => props.onSearch(character)}>Agregar</button> 
      </div> 
   );
}
// agregamos props.onSearch a onClick para agregar el boton a nuestra pagina y que este quede funcional