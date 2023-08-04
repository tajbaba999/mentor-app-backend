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
    type: Number,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
  },
  medium: {
    type: String,
  },
  caste: {
    type: String,
  },
  religion: {
    type: String,
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
  rank: {
    type: Number,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

// ?
