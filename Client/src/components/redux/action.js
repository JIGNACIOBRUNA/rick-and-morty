import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionTypes";
import { FILTER, ORDER } from "./actionTypes";
import axios from "axios";

export const addFavorite = (character) => {
    // return{
    //     type: ADD_FAVORITE,
    //     payload: character
    // } 
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => { // esta la funcion asincronica ya que esta es la que hace el llamado a axios
      try {
        const { data } = await axios.post(endpoint, character);
        
        if(!data.length) throw Error("No hay favoritos")
        return dispatch({  
           type: ADD_FAVORITE,
           payload: data,
        }); 
    
      } catch (error) {
        console.log(error.message);
      }
       
    //   .then(({ data }) => {
   };

}

export const deleteFavorite = (id) => {
    // return{
    //     type: DELETE_FAVORITE,
    //     payload: id
    // }
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
        return async (dispatch) => {
            try {
                const { data } = await axios.delete(endpoint)

                if(!data.length) throw Error("No hay favoritos")
                return dispatch({
                   type: DELETE_FAVORITE,
                   payload: data,
                });
            } catch (error) {
                console.log(error.message);
                
            }
           
        //    .then(({ data }) => {
        //    });
        };
}

export const filterCards = (gender) =>{
    return{
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER,
        payload: id
    }
}