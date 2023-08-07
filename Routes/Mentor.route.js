const express = require("express");
const router = express.Router();

const Mentor = require("../Models/Mentor.model.js");

router.get("/", async (req, res, next) => {
  try {
    const results = await Mentor.find({}, { __v: 0 });

    if (!results) {
      return res.status(201).json({ message: "add mentors its empty" });
    }
    return res.send(results);
  } catch (error) {
    return res.send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const ment = new Mentor(req.body);
    const result = await ment.save();
    if (result) 
      return res.status(201).json({ message: "mentor created" });
  } catch (error) {
    return res.send(error);
  }
});

router.get("/:mailid", async (req, res, next) => {
  const mail = req.params.mailid;
  try {
    const result = await Mentor.findOne({ mailid : mail }, { __v: 0 });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
});

router.patch("/:mailid", async (req, res, next) => {
  try {
    const mailid = req.params.mailid;
    const updates = req.body;

    const options = { new: true };
    const result = await Mentor.findOneAndUpdate({ mailid: mailid }, updates, options)
    .select("-__v")
    .exec();

    return res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:mailid", async (req, res, next) => {
  const mailid = req.params.mailid;
  try {
    const result = await Mentor.findOneAndDelete({ mailid: mailid });
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: `Deleted user mailid: ${mailid}` });
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
