require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const StudentRoute = require("./Routes/Student.route");
const MentorRoute = require("./Routes/Mentor.route.js");
const AdminRoute = require("./Routes/Admin.route");

app.use(express.json());
app.use(cors());
// try {
//   console.log("try ")
//   mongoose.connect('mongodb+srv://tajbaba2003:GK8lixVdzOPn2wiv@students.wprxnuy.mongodb.net/').then(()=>console.log("db connected"))
// } catch (error) {
//   console.log(error.message)
// }

const dbOptions = {
  dbName: process.env.DATABASE_NAME,
  user: process.env.USERNAME,
  pass: process.env.PASSWORD,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


// mongoose
//   .connect(process.env.MONGODB_URL, {
//     dbName: process.env.DATABASE_NAME,
//     user: process.env.USERNAME,
//     pass: process.env.PASSWORD,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })

//   .then(() => {
//     console.log("Mongodb connected....   ");
//   });

app.use("/students", StudentRoute);
app.use("/mentors", MentorRoute);
app.use("/admin",AdminRoute)
// app.get("/",(req,res)=>{
//   return res.send("hello world")
// })
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
