import { useState, useEffect } from 'react'
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from "./components/Form/Form";
import Favorites from "./components/Favorito/Favorite";



function App () {
  const [characters, setCharacters] = useState([]);

  function onClose(id){
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          const isDuplicate = characters.some((char) => char.id === data.id);
          if(!isDuplicate){
            setCharacters((oldChars) => [...oldChars, data]);
          }else{
            window.alert("El personaje ya esta en la lista");
          }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const location = useLocation();
  const navigate = useNavigate();

const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname !=="/" && <NavBar onSearch={onSearch} /> }
      
        <Routes>
          <Route path="/" element={<Form login ={login}/>}/>
          <Route path= "/home" element={ <Cards
          characters={characters} onClose ={onClose}
        />} />
          <Route path= "/about" element={<About/>}/>
          <Route path= "/favorites" element={<Favorites/>}/>
          <Route path= "/detail/:detailId" element={<Detail/>}/>
        </Routes>
       
      </div>
    </div>
  )
}

export default App


/*

import Card from './components/Card.jsx'
import SearchBar from './components/SearchBar.jsx'
<hr />
<div>
<SearchBar
  onSearch={(characterID) => window.alert(characterID)}
/>
</div> 


<Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />*/