const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    desg : {
        type : String,
    },
    phone :{
        type : Number,
    },
    mailid : {
        type : String,
        required: true,
        unique: true,
    },
    sec : {
        type : String,
    },
    stdarr :{
        type : [String]
    },
    stdcnt : {
        type : Number,
        default: function () {
            return this.stdarr.length; 
        },
    },
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;