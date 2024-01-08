import { ADD_CARD, ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, REMOVE_CARD } from "./actionTypes"

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state, 
                myFavorites: action.payload
            };
        case DELETE_FAVORITE:
           return{
            ...state,
            myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
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
        case ADD_CARD:
            return{
                ...state,
                allCharacters: [...state.allCharacters, action.payload]
            };
        case REMOVE_CARD:
            return{
                ...state,
                allCharacters: state.allCharacters.filter((card) =>card.id !== action.payload)
            }
       default:
        return {...state} 
    }
}


export default reducer 