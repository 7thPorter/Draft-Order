const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

const { dbConnection } = require("./server/db/index");
const player = require("./routes/player");

const startServer = async () => {
  await dbConnection.sync();
  app.listen(PORT, () => {
    console.log(`Server is performing live in front of ${PORT} fans!`);
  });
};
startServer();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "./public")));

//Routes within the site vvv

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

app.use("/api", player);

app.get("/api/test", (req, res) => {
  res.send("This is a test.");
});

app.use((req, res, next) => {
  const err = new Error("Route not found!");
  err.status = 404;
  next(err);
});
