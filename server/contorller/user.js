const Users = require("../models/user")
const bcrpt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const getJWT = (payload) => {
    return jwt.sign(payload,"lalit@1994",{expiresIn: 60 * 60})
}

exports.createUser = async (req, res,nxt) => {
    const {email} = req.body
    const isUersEmailExist = await Users.findOne({email})
    if (isUersEmailExist) {
        
        return res.status(200).json({
            success: false,
            massage:"User Already exist"
        })
        
    }
    const user = await Users.create(req.body)
    const token = getJWT({id:user.id})
    if (!token) {
        return res.send(Error)
    }
    const salt = await bcrpt.genSalt(10)
    user.password = await bcrpt.hash(user.password, salt)
    user.save()
    res.status(200).cookie("token",token).json({
        success: true,
        user,token
    })
}

exports.loginUser = async (req, res) => {
    const { email } = req.body
    console.log(req.body);
    const isUersEmailExist = await Users.findOne({ email })
    if (!isUersEmailExist) {
        return res.status(200).json({
            success: false,
            massage:"User does not exist"
        })
        
    }
    const validatePassword = await bcrpt.compare(req.body.password, isUersEmailExist.password)
    if (!validatePassword) {
        return  res.status(200).json({
            success: false,
            massage:"email or pasword are worng "
        })
    }
    const token = getJWT({ id: isUersEmailExist.id })
    res.status(200).cookie("token",token).json({
        success: true,
        massage:"logged in"
        
    })
    
}




exports.logOutUser = async(req,res,nxt)=>{


    res.status(200).clearCookie('token').json({
            succsses:true,
            massage:"Logged Out"
        })
}
    

exports. addMovie = async (req, res) => {
    const { movi } = req.body
    

    const user = await Users.findById(req.params.id)
    if (!user) {
        return res.status(400).json({
            massage:"user  not exist"
        })
    }

    const movie = await user.movies.push(movi)
    await user.save()
    res.status(200).json({
        success: true,
        massage:"movie Added"
    })
   
}

exports.getAllmovie = async (req, res) => {
    const user = await Users.findById(req.params.id)
    const movies = await user.movies
    res.status(200).json({
        success: true,
        ...movies
        
    })
}

exports. removeMovie = async (req, res) => {
    const { movi } = req.body
    

    const user = await Users.findById(req.params.id)
    if (!user) {
        return res.status(400).json({
            massage:"user  not exist"
        })
    }
    const movie = await user.movies.filter((movie) => {
        if (movie.name !== movi.name) {
            
            return movie
        }
    })
    user.movies = movie
    await user.save()
    res.status(200).json({
        success: true,
        massage:"movie Removed"
    })
   
}



