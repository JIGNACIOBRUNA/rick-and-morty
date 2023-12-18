// const { Favorite } = require("../DB_connection");

// let myFavorite = []

// const postFav = async(req, res) =>{
//     const favortie = req.body;
//     myFavorite.push(favortie);
//     res.status(200).json(myFavorite);
//     // const { name, origin, status, image, species, gender} = req.body;
//     // try {
//     //     if(!name || !origin || !status || !image || !species || !gender) res.status(401).json({message: "Faltan datos"})

//     //     const [fav, created] = await Favorite.findOrCreate({where: {name, origin, status, image, species, gender}})
//     //     res.status(200).json(fav)
//     // } catch (error) {
//     //     res.status(500).json({message: error})
//     // }

// }
// module.exports = {
//     postFav
// }