const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollno: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
  },
  mothername: {
    type: String,
  },
  aadharno: {
    type: String,
  },
  dob: {
    type: String,
  },
  gender: {
    type: String,
  },
  medium: {
    type: String,
  },
  sscmarks: {
    type: Number,
  },
  intermarks: {
    type: Number,
  },
  fatherno: {
    type: Number,
  },
  motherno: {
    type: Number,
  },
  stdno: {
    type: Number,
  },
  caste: {
    type: String,
  },
  religion: {
    type: String,
  },
  rank: {
    type: Number,
  },
  stdAdim: {
    type: String,
  },
  pressadd: {
    type: String,
  },
  permadd: {
    type: String,
  },
  stdmail :{
    type : String
  },
  fathermail : {
    type: String
  },
  mothermail : {
    type : String
  }

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

// ?
