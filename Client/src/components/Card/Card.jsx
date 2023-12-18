import style from "../Card/Card.module.css";
import {Link} from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/action";
import { connect } from "react-redux";
import { useState, useEffect} from "react";


// const DivCard = styled.div`
// display: grid;
// grid-template-columns: repeat(auto-fill, 320px); 
// background-color: rgba(128, 128, 128, 0.5);
// border-radius: 15px;
// color: black;
// `;

// const Button = styled.button`
// background-color: #cc1515;
// color: black; 
// color-size: 20px;
// border-radius: 15px;
// cursor: pointer;
// trasition-duration: 0.5s;
// width: 16%;
// justify-content: space-around
// `;


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
      
      <div className={style.card}>
         <div >
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button className={style.button} onClick={props.onClose}>X</button> 
         <Link to={`/detail/${props.id}`}>
            <h2 className ={style.title}>{props.name}</h2>
         </Link>
         <div className={style.cardContent}>
            <h2 >{props.species}</h2>
            <h2 >{props.gender}</h2>
         </div>
         <div className={style.cardImg}>
            <img  src={props.image} alt="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
         </div>

         </div>
      </div>
     
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