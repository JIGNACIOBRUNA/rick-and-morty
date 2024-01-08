import SearchBar from "../SearchBar/SearchBar";
import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Image from 'react-bootstrap/Image';
// import { Link } from "react-router-dom"

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
//         <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
//          <Container fluid>
//             <Navbar.Brand>
//                 <Image
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
//                 alt="Rick and Morty Logo"
//                 fluid
//                 style={{ width: '160px', height: '60px' }}/>
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//                 <Nav
//                     className="me-auto my-2 my-lg-0"
//                     style={{ maxHeight: '100px' }}
//                     navbarScroll
//                 >
//                     <Nav.Link as={Link} to="/Home" href= "/Home">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/About" href="/About">About</Nav.Link>
//                     <Nav.Link as={Link} to="/Favorites" href="/Favorites">Favorites</Nav.Link>
//                 </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

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
         </nav>
    )
}
