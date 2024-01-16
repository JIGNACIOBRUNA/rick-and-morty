import React from "react";
import style from "./Form.module.css";
import validation from "./validation.js";


export default function Form(props){
    const [userData, setUserData] = React.useState({ 
        username: '',
        password: '' 
    });

    const [errors, setErros] = React.useState({ 
        username: '',
        password: '' 
    });

    const handleInputChange = (e) =>{
        setUserData ({...userData, [e.target.name]: e.target.value});
        setErros(validation(userData))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

    return( 
        <div className={style.fondo}>
            <div className={style.container}> 
                <form onSubmit={handleSubmit} className={style.login}>
                    <div>
                    <label>Username: </label>
                    <input type ="text" placeholder="username" name="username" value={userData.username} onChange={handleInputChange}/>
                    <p className={style.text}>El usuario es: ejemplo@gmail.com</p>
                    </div>
                    <div>
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" value={userData.password} onChange={handleInputChange}/>
                    <p className={style.text}>La password es: 1password</p>
                    </div>
                    <button className={style.button} type="submit">Login</button>
                </form>
            </div>
        </div>
   
    )

}

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import style from "./Form.module.css";
// import validation from "./validation.js";

// export default function Form({ login }) {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [userData, setUserData] = useState({
//     username: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     username: '',
//     password: '',
//   });

//   const [access, setAccess] = useState(false);

//   const handleInputChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//     setErrors(validation(userData));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrors(validation(userData));

//     if (!Object.keys(errors).length) {
//       try {
//         const { username: email, password } = userData;
//         const { data } = await axios(
//           `URL A TU ENDPOINT DE AUTENTICACIÓN?email=${email}&password=${password}`
//         );

//         const { access } = data;
//         setAccess(access);
//         access && login(userData);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   };

//   const handleLogout = () => {
//     setAccess(false);
//     navigate('/');
//   };

//   useEffect(() => {
//     !access && navigate('/');
//   }, [access, navigate]);

//   return (
//     <div className={style.fondo}>
//       <div className={style.container}>
//         {access ? (
//           <button className={style.button} onClick={handleLogout}>
//             Cerrar Sesión
//           </button>
//         ) : (
//           <form onSubmit={handleSubmit} className={style.login}>
//             <div>
//               <label>Username: </label>
//               <input type="text" placeholder="username" name="username" value={userData.username} onChange={handleInputChange} />
//               <p className={style.text}>El usuario es: ejemplo@gmail.com</p>
//             </div>
//             <div>
//               <label>Password:</label>
//               <input type="password" placeholder="password" name="password" value={userData.password} onChange={handleInputChange} />
//               <p className={style.text}>La password es: password</p>
//             </div>
//             <button className={style.button} type="submit">
//               Login
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }

