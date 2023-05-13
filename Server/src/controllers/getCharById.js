// const axios = require("axios");

// const getCharById = (res, id) =>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)//hacemos destructuring del .data
//     .then(({name, gender, species, origin, image, status }) => {
//         const character = {
//             id, 
//             name,
//             gender,
//             species,
//             origin,
//             image,
//             status
//         }
//         return res
//             .writeHead(200, {"Content-Type": "application/json"})//se indica le tipo de formato o de dato de la respuesta 
//             .end(JSON.stringify(character))
//     })      
//             .catch(error => {
//                 return res
//                         .writeHead(500, {"Content-Type": "text/plain"})//por lo general es un string 
//                         .end(error.message)
//             }) 
            

// }

// module.exports = { getCharById }


const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios");

const getCharById = async (req, res) => { // para volver la funcion en asincronica debemos poner async antes de la declaracion de funcion 
    try{
        const { id } = req.params; // hacemos la peticion a la API a partir del id que se recibe por params
        const { data } = await axios.get(`${URL}/${id}`)// en este caso no hace falta parsearlo porque estamos concatenando strigns EL ID ES NECESARIO PORQUE SIN ESTE NO SE HACE LA PETICION YA QUE BUSCA POR ID 
        // .then(response => response.data)// al estar con axios me quedo con data
        // .then(({status, name, species, origin, image, gender}) =>{
            if(!data.name) throw new Error(`ID: ${id} Not found`);
            
            // if(data.name){// Esta condicion puede ir solo con la solicitud de name ya que el id siempre va a dar true 
            const character = {// en este caso el if de arriba esta de mas 
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender:data.gender,
            }
            res.status(200).json(character)
            // res.status(404).send("Not found");
            
        
    } catch(error){
        return error.message.includes("ID") // en la propiedad message del objeto error nos llega el objeto 
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error) // por la arrow no es necesario hacer un return se hace implicito 

    }

    
}


module.exports = {
    getCharById
};