const express = require("express");
const app = express()
const userRouter = require("./route/usersRoute")
const movieRouter = require("./route/moiveRoute")
const cookieParser = require('cookie-parser')
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/', userRouter)
app.use('/', movieRouter)






module.exports = app