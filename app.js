require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const StudentRoute = require("./Routes/Student.route");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: process.env.DATABASE_NAME,
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Mongodb connected....   ");
  });

app.use("/students", StudentRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
