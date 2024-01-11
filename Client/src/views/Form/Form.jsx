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
                    <p className={style.text}>La password es: password</p>
                    </div>
                    <button className={style.button} type="submit">Login</button>
                </form>
            </div>
        </div>
   
    )

}
