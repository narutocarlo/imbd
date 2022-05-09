const express = require("express")
const router = express.Router()
const { createUser,loginUser,logOutUser,addMovie,removeMovie,getAllmovie } = require("../contorller/user")
const jwtAuthentication = require("./AuthenticationJwt")


router.post("/signUp", createUser)
router.post("/login", loginUser)
router.post("/logOut", logOutUser)
router.get("/movies/:id",jwtAuthentication, getAllmovie)
router.post("/movies/add/:id",jwtAuthentication, addMovie)
router.post("/movies/remove/:id",jwtAuthentication, removeMovie)



module.exports = router