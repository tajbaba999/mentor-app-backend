const express = require("express");
const router = express.Router();

const Student = require("../Models/Student.model");

router.get("/", async (req, res, next) => {
  try {
    const results = await Student.find({}, { __v: 0 });

    if (!results) {
      return res.sendStatus(201).json({ message: "add students its empty" });
    }
    return res.send(results);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const std = new Student(req.body);
    const result = await std.save();
    if (result) res.status(201).json({ message: "user created" });
  } catch (error) {
    return res.send(error);
  }
});

router.get("/:rollno", async (req, res, next) => {
  const rollno = req.params.rollno;
  try {
    const std = await Student.findOne({ rollno: rollno }, { __v: 0 });
    if (!std) {
      return res.status(404).json({ message: "Student doesn't exists" });
    }
    return res.send(std);
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/:rollno", async (req, res, next) => {
  try {
    const rollno = req.params.rollno;
    const updates = req.body;

    const options = { new: true };
    const result = await Student.findOneAndUpdate({ rollno: rollno }, updates, options)
    .select("-__v")
    .exec();
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:rollno", async (req, res, next) => {
  const rollno = req.params.rollno;
  try {
    const userId = await Student.findOneAndDelete({rollno : rollno} ,{ __v : 0} )
    return res.status(200).json({ message: `Deleted user rollno : ${rollno}` });
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
