import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import LogoutButton from "../Logout/Logout";


const NavLinkMe = ({ to, children, ...props}) => {
    return(
        <NavLink 
        {...props}
        to={to}
        className={({isActive}) =>
        isActive ? style.active:
        style.disable   
        }
        >
        {children}  
        </NavLink>
    );
};

export default function NavBar(props){

    return(
        <nav className={style.nav}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" 
        background-color = "inherit"
        alt="Rick&Morty" 
        width="20%" 
         /> 
         <NavLink className={style.links}> 
            <NavLinkMe to= "/Home">Home</NavLinkMe>
            <NavLinkMe to="/About">About</NavLinkMe>
            <NavLinkMe to="/Favorites">Favorites</NavLinkMe>

         </NavLink>
       
        <SearchBar  onSearch={props.onSearch} />
        <LogoutButton />
         </nav>
    )
}
