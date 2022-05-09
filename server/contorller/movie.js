const Movies = require("../models/moviesModel")


exports.getAllmovie = async (req, res,nxt) => {
    const movies = await Movies.find()

    res.status(200).json({
        success: true,
        massage: "geting All movies",
        movies
    })
        
    }