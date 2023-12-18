import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import style from "./Favorite.module.css"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../components/redux/action";
import NavBar from "../../components/NavBar/NavBar";

const DivCard = styled.div`
display: grid; 
grid-template-columns: repeat(auto-fill, 320px);
justify-content: center;
padding: 40px;
gap: 40px;
backface-visibility: hidden;
transform: translate(0);
transition: transform 0.25s ease-out;
`;


const Favorites = (props) => {
    const { myFavorites } = props;
    const dispatch = useDispatch();
    
    return( 
        <div>
            <NavBar/>
        <DivCard>
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
            {myFavorites.length && myFavorites.map((character) => {
                return <Card
                id={character.id}
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                />
            })}
        </DivCard> 
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect (mapStateToProps,  null)(Favorites)