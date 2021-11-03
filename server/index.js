const express = require("express");
const app = express();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is performing live in front of ${PORT} fans!`);
});

app.get("/", (req, res) => {
  res.send("Hey, how are ya?");
});
