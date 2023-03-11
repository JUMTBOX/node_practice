const express = require("express");

const app = express();
const PORT = 4000;

app.use("/", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`The Server is Opened at Port ${PORT}...`);
});
