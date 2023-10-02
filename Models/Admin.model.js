const mongoose = require('mongoose')
const validator = require("validator")
const bcrypt = require("bcrypt")

const adminSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    
});

// signup statics function

adminSchema.statics.signup = async function(email,name,password) {
    if(!email || !password || !name) {
        throw Error("All fields must be filled")
    }

    if(!validator.isEmail(email)) {
        throw Error("Not a valid email")
    }

    if(!validator.isStrongPassword(password)) {
        throw Error("Password is not strong enough")
    }
    const exists = await this.findOne({email})
    if(exists) {
        throw Error('Email is already in use')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const uImage = null;
    const user = await this.create({email,name,uImage,password : hash})

    return user
}

// login statics function

adminSchema.statics.login = async function(email,password) {
    if(!email || !password) {
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({email})
    if(!user) {
        throw Error('Invalid email')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match) {
        throw Error('Invalid password')
    }

    return user
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;