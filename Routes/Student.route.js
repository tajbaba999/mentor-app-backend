const express = require("express");
const router = express.Router();

const Student = require("../Models/Student.model");

router.get("/", async (req, res, next) => {
  try {
    const results = await Student.find({}, { __v: 0 });

    if (!results) {
      return res.status(201).json({ message: "add students its empty" });
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
    if (result) res.send(201).json({ message: "user created" });
  } catch (error) {
    return res.send(error);
  }
});

router.get("/:rollno", async (req, res, next) => {
  const rollno = req.params.rollno;
  try {
    const std = await Student.findOne({ rollno: rollno }, { __v: 0 });
    if (!std) {
      return res.send(404).json({ message: "Student doesn't exists" });
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

    const studentData = await Student.findOne({ rollno: rollno });

    const options = { new: true };
    const result = await Student.findByIdAndUpdate(
      studentData.id,
      updates,
      options
    );
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:rollno", async (req, res, next) => {
  const rollno = req.params.rollno;
  try {
    const userID = await Student.findOne({ rollno: rollno });
    await Student.findByIdAndDelete({ _id: userID.id }, { __v: 0 });
    return res.send(200).json({ message: `Deleted user rollno : ${rollno}` });
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
