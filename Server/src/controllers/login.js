const users = require("../utils/users");

const login = (req, res) => {
    const { email, password} = req.query; //OBETENEMOS LOS DATOS MEDIANTE DESTRUCTURING DESDE REQUEST.QUERY
    const userFound = users.find((user) => user.email === email && user.password === password)// SI YO ESTOY RECORRIENDO UN ARRAY DE NOMBRE USERS LO QUE RECORREMOS ES CADA USER POR ESTO SE LE DA ESE NOMBRE

    //if(userFound) return res.status(200).json({ access: true})
    // return res.status(404).json({ access: false})
    // ES LO MISMO QUE LO DE ARRIBA 
    return userFound
    ? res.status(200).json({ access: true})
    : res.status(200).json({ access: false})
}


module.exports = login
