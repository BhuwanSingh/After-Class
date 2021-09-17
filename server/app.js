const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(require("morgan")("dev"));

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3001;

const DB = process.env.DATABASE;
const mongoose = require("mongoose");
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"));

//Linking router files
app.use("/user", require("./router/user"));
// app.use("/threadRouter" , require("./router/threadRouter"));

app.get("/test_api", (req, res) => {
  res.json("just another test message");
});

app.listen(port, () => console.log(`Listening on port ${port}`));


// a comment.