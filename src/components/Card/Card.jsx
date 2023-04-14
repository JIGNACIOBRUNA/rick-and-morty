import style from "../Card/Card.module.css";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/action";
import { connect } from "react-redux";
import { useState, useEffect} from "react";


const DivCard = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, 320px); 
background-color: rgba(128, 128, 128, 0.5);
border-radius: 15px;
color: black;
`;

const Button = styled.button`
background-color: #cc1515;
color: black; 
color-size: 20px;
border-radius: 15px;
cursor: pointer;
trasition-duration: 0.5s;
width: 16%;
justify-content: space-around
`;


export function Card(props) {
   const [isFav, setIsFav] = useState(false);
   const { addFavorite, deleteFavorite, myFavorites } = props;

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         deleteFavorite(props.id)
      }else{
         setIsFav(true)
         addFavorite(props)
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === props.id) {
            setIsFav(true);
         }
      })
   }, [myFavorites]);

   return (
      
      <DivCard className={style.fondo}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Button className={style.buttonSearch} onClick={props.onClose}>X</Button> 
         <Link to={`/detail/${props.id}`}>
         <h2 className ={style.title}>{props.name}</h2>
         </Link>
         <div style={{display: "flex", justifyContent: "space-evenly"}}>
         <h2 className={style.posicion}>{props.species}</h2>
         <h2 className={style.posicion}>{props.gender}</h2>
         </div>
         <img className={style.borde} src={props.image} alt="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </DivCard>
     
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character));
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      }
   };
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
/*pasamos las propiedades con props que viene como parametro de Card*/ 