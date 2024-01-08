import { connect } from "react-redux";
import Cards from "../../components/Cards/Cards";
import { Link } from "react-router-dom";
import style from "./Favorite.module.css"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../components/redux/action";
import NavBar from "../../components/NavBar/NavBar";


const Favorites = (props) => {
    // const { myFavorites } = props;
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites);

    return( 
        <div>
            <NavBar/>
            <div>
                <select name="order" onChange={(e)=>{dispatch(orderCards(e.target.value))}}>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onChange={(e)=>{dispatch(filterCards(e.target.value))}}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknow">Unknow</option>
                </select>
            </div>
            {/* {myFavorites.length && myFavorites.map((character) => {
                return <Cards
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })} */}
            <Cards characters={favorites}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps,  null)(Favorites)