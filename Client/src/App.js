import { useState, useEffect } from 'react'
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from "./components/NavBar/NavBar.jsx";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './views/Detail/Detail';
import About from './views/About/About';
import Form from "./views/Form/Form";
import Favorites from "./views/Favorito/Favorite";
import Home from "./views/Home/Home";
import axios from "axios";

const URL = 'http://localhost:3001/rickandmorty/login';


function App () {
  const [characters, setCharacters] = useState([]);

  // function onClose(id){
  //   setCharacters(characters.filter((element) => element.id !== id));
  // }

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
      
  const location = useLocation();
  const navigate = useNavigate();

const [access, setAccess] = useState(false);
const email = 'ejemplo@gmail.com';
const password = '1password';

const login =  async (userData) => {
  console.log("userData", userData);
  try {
    const { username: email, password } = userData;
    const { data } = await axios(URL + `?email=${email}&password=${password}`)
    
      // .then(({ data }) => {
       const { access } = data;
       setAccess(access); 
       access && navigate('/home');
    }
    // );
    catch (error) {
     console.log(error.message);
   }
 }
    

 
useEffect(() => {
  !access && navigate('/');
}, [access]);

  return (
    <div /*className='App' style={{ padding: '25px' }}*/>
      <div>
        {/* {location.pathname !=="/" && <NavBar onSearch={onSearch} /> } */}
      
        <Routes>
          <Route path="/" element={<Form login ={login}/>}/>
          <Route path= "/home" element={ <Home
          // characters={characters} onClose ={onClose}
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