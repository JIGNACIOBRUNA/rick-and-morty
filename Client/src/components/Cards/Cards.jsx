import style from "../Card/Card.module.css"
import Card from '../Card/Card';
import styled from "styled-components";


const DivCards = styled.div`
display: grid; 
grid-template-columns: repeat(auto-fill, 320px);
justify-content: center;
padding: 40px;
gap: 40px;
backface-visibility: hidden;
transform: translate(0);
transition: transform 0.25s ease-out;
`;

export default function Cards(props) {
   const { characters } = props;
   let i = 0; 
    // realizamos un map a characters que es donde se encuentran los personajes del ejercicio RECORDAR QUE EL ELEMENTO LO DEJAMOS COMO PARAMETRO PUEDE TENER OTRO NOMBRE, despues renderizamos con Card que es donde tenemos definidos el nombre raza genero e imagen (del ejercicio anterior) 
   return <DivCards >
      {characters.map((elemento) => 
      <Card
      characters = {elemento.characters}
      id = {elemento.id} 
      name ={elemento.name} 
      species ={elemento.species} 
      gender = {elemento.gender} 
      image = {elemento.image} 
      onClose = {() => props.onClose(elemento.id)}
      key = {i++} />)}
   </DivCards>;
}
