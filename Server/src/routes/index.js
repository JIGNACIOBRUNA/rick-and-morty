const login  = require("../controllers/login")
const {getCharById}  = require("../controllers/getCharById")
const { postFav, deleteFav } = require ("../controllers/handleFavorites")

const router = require("express").Router();// lo inicializamos asi porque de express solo queremos el Router

router.get("/character/:id", getCharById)
     // cuando hacen una peticion a la ruta de la linea anterior se va a ejecutar el controlador  


router.get("/login", login) // sino le ingreso la funcion la ruta queda vacia y no hace nada 

 
router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav);

module.exports = router;  