const sentmail = require("./smtp");
const express = require("express");
let port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("iam running");
});
app.get("/mail", sentmail);
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on ${port}`);
  }
});
