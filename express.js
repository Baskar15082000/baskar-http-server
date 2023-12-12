const path = require("path");
const uuid = require("uuid");
const express = require("express");
const { send } = require("process");
const app = express();
const statusMessages = require("./statusMessage");
const port = 3000;

const router = express.Router();
router.get("/html", (req, res) =>
  res.sendFile(path.join(__dirname, "temp.html"))
);
router.get("/json", (req, res) =>
  res.sendFile(path.join(__dirname, "data.json"))
);
router.get("/uuid", (req, res) => res.json(uuid.v4()));
router.get("/status/:code", (req, res) => {
  if (!statusMessages[req.params.code]) {
    res.status(400).json({ msg: "No status code found" });
  } else {
    res.status(req.params.code).send(statusMessages[req.params.code]);
  }
});
router.get("/delay/:sec", (req, res) => {
  setTimeout(() => {
    res.send("Response after delay " + req.params.sec);
  }, req.params.sec * 1000);
});

app.use("/http", router);
app.listen(port, () => {
  console.log("Listening on port " + port);
});
