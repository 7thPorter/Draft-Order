const express = require("express");
const app = express();

const PORT = 8080;

const dbConnection = require("./db/index");

const startServer = async () => {
  await dbConnection.sync();
  app.listen(PORT, () => {
    console.log(`Server is performing live in front of ${PORT} fans!`);
  });
};
startServer();

app.get("/", (req, res) => {
  res.send("Hey, how are ya?");
});
