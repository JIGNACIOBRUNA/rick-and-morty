let myFavorites = [];

const postFav = (req, res) => {
    const favortie = req.body;
    myFavorites.push(favortie)
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