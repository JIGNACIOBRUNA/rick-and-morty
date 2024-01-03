import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./actionTypes"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload
            };
        case DELETE_FAVORITE:
        //    const filtered = state.myFavorites.filter((character) => character.id !== payload)
           return{
            ...state,
            myFavorites: action.payload,
            allCharacters: action.allCharacters
           };
    

        case FILTER:
           const filterByGender = [...state.allCharacters].filter((character)=> character.gender === action.payload)
           return {...state,
                   myFavorites: filterByGender,
                };
        case ORDER: 
            const orderByFavorite = [...state.allCharacters].sort((a,b) => {
                if(a.id > b.id){
                return action.payload === "Ascendente" ? 1 : -1
            }else if(a.id < b.id){
                return action.payload === "Descendente" ? 1 : -1;
            }else {
                return 0
            }
        });
        return{
            ...state,
            myFavorites: orderByFavorite,
        };
       default:
        return {...state} 
    }
}


export default reducer 