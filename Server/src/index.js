// const http = require ("http");
// // const data = require ("./utils/data");
// const { getCharById } = require("./controllers/getCharById");

// http.createServer((req, res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes("/rickandmorty/character")){
//     //    const id = req.url.split("/").at(-1);
//     //    const characterFound = data.find((character)=>{
//     //        return character.id === +id //el + si se pone delante de un strign transforma el string a numero 
//     //    })
//     //    res.writeHead(200, {"Content.Type": "application/json"})
//     //    .end(JSON.stringify(characterFound))// el stringify toma el objeto de js y lo convierte a json 
//     // }

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").at(-1);
//         getCharById(res, +id);
//     }
// }).listen(3001)

// const express = require("express");
// const server = express();
// const router = require("./routes/index");
const server  = require("./app")
const PORT = 3001; 


// server.use(express.json());


// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header(
//        'Access-Control-Allow-Headers',
//        'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     res.header(
//        'Access-Control-Allow-Methods',
//        'GET, POST, OPTIONS, PUT, DELETE'
//     );
//     next();
//  });

//  server.use("/rickandmorty", router);

server.listen(PORT, () =>{// el listen debe quedar en el index porque 
    console.log(`Server raised in port: ${PORT}` );
}) // con esto ya generamos nuestro servidor con Express

 