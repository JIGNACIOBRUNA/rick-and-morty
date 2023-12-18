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
        <div className={style.container}> 
             <form onSubmit={handleSubmit} className={style.login}>
                <div >
                <label>Username: </label>
                <input type ="text" placeholder="username" name="username" value={userData.username} onChange={handleInputChange}/>
                </div>
                <div>
                <label>Password:</label>
                <input type="password" placeholder="password" name="password" value={userData.password} onChange={handleInputChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
   
    )

}
