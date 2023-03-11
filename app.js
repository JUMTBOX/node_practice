const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

const userData = [
  {
    id: "yjey12",
    name: "양재연",
  },
  {
    id: "calm",
    name: "김윤환",
  },
  {
    id: "miso",
    name: "한두열",
  },
];

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/users", (req, res) => {
  console.log(JSON.stringify(userData));
  res.send(JSON.stringify(userData));
});

app.listen(PORT, () => {
  console.log(`The Server is Opened at Port ${PORT}...`);
});
