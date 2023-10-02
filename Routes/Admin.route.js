const express = require("express");
const router = express.Router();
const Admin = require("../Models/Admin.model.js");
const jwt = require('jsonwebtoken')


const createToken = (_id) => {
    return jwt.sign({_id},"cvradminpanel",{expiresIn : '3d'})
}

const signupAdmin = async (req,res) => {
  const {email,name,password} = await req.body
  
  try {

      const user = await Admin.signup(email,name,password)
      const token = createToken(user._id)
      res.status(200).json({email,name,token})

  } catch(err) {
      res.status(400).json({error : err.message})
  }


}

const loginAdmin = async (req,res) => {
    console.log(req.body)
    const data = await req.body
  
  try {
      const user = await Admin.login(data.email,data.password)
      const token = createToken(user._id)
      const {name,email} = user
      res.status(200).json({email,name,token})

  } catch(err) {
      res.status(400).json({error : err.message})
  }
}

//login user
router.post('/login',loginAdmin)

//signup user
router.post('/signup',signupAdmin)

module.exports = router;
