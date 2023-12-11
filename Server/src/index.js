const server  = require("./app")
const PORT = 3001; 
const { conn } = require('./DB_connection');

conn.sync({force: false}).then(() => {// en esta linea estamos haciendo la sincronizacion de sequelize 
    server.listen(PORT, () =>{// el listen debe quedar en el index porque 
        console.log(`Server raised in port: ${PORT}` );
    }) // con esto ya generamos nuestro servidor con Express
})



 