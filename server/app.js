const express = require("express");
const app = express()
const userRouter = require("./route/usersRoute")
var cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use('/', userRouter)






module.exports = app