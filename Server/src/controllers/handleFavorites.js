let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;
    const favoriteRepeated = myFavorites.find(favorite =>{
        return favorite.id === character.id;
    }) ;
    if(!favoriteRepeated) myFavorites.push(character)
    
    res.status(200).json(myFavorites)
}

const deleteFav = (req, res) =>{
    const deleteFavortie = req.params.id;
    myFavorites = myFavorites.filter((fav) => fav.id !== +deleteFavortie);
    res.status(200).json(myFavorites);
};

module.exports = {
    postFav,
    deleteFav
};