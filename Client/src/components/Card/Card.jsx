import style from "../Card/Card.module.css";
import {Link} from "react-router-dom";
import { addFavorite, deleteFavorite } from "../redux/action";
import { connect } from "react-redux";
import { useState, useEffect} from "react";



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

   useEffect(() => {
      if (!myFavorites.some((fav) => fav.id === props.id)) {
        setIsFav(false);
      }
    }, [myFavorites, props.id]);
  

   return (
      <div className={style.cardHeader}>
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