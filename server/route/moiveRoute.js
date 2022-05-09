const express = require("express")
const router = express.Router()
const {getAllmovie} = require("../contorller/movie")


router.get('/getAllMovie', getAllmovie)

module.exports = router