const express = require("express")
const { createUser,loginUser,logOutUser,addMovie,removeMovie,getAllmovie } = require("../contorller/user")
const jwtAuthentication = require("./AuthenticationJwt")
const router = express.Router()


router.post("/signUp", createUser)
router.post("/login", loginUser)
router.post("/logOut", logOutUser)
router.post("/movies/add/:id",jwtAuthentication, addMovie)
router.post("/movies/:id",jwtAuthentication, getAllmovie)
router.post("/movies/remove/:id",jwtAuthentication, removeMovie)



module.exports = router