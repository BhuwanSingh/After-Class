const express = require("express");
const app = express();
const httpServer = require("http").createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use("/images", express.static(path.join(__dirname, "./images")));

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(require("morgan")("dev"));

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 3001;

const DB = process.env.DATABASE;
const mongoose = require("mongoose");
const multer = require("multer");
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful!"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded successfully");
});

//Linking router files
app.use("/user", require("./router/user"));
app.use("/posts", require("./router/posts"));

app.get("/test_api", (req, res) => {
  res.json("just another test message");
});

const users = {};

io.on("connection", (socket) => {
  console.log("someone connecte and socket id " + socket.id);

  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);

    for (let user in users) {
      if (users[user] === socket.id) {
        delete users[user];
      }
    }

    io.emit("all_users", users);
  });

  socket.on("new_user", (username) => {
    console.log("Server : " + username);
    users[username] = socket.id;

    io.emit("all_users", users);
  });

  socket.on("send_message", (data) => {
    console.log(data);

    const socketId = users[data.receiver];
    io.to(socketId).emit("new_message", data);
  });

  socket.on("canvas-data", (params, data) => {
    socket.join(params);
    console.log("Joined:" + params);
    // socket.broadcast.emit('canvas-data',data)
    io.to(params).emit("canvas-data", data);
  });
});

// app.listen(port, () => console.log(`Listening on port ${port}`));

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// a comment.
