const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000/"],
  })
);
app.use(taskRoutes);

// const logger = (req, res, next) => {
//   console.log("MIDDLE WEAR");
//   console.log(req.method);
//   next();
// };

// Routes

app.get("/", (req, res) => {
  res.send("Home page");
});

//connectDB();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
//
// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`server running on ${PORT}`);
//     });
//   } catch (error) {
//     console.log(Error);
//   }
// };
//startServer();
