const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send();
});

router.post("/", async (req, res, next) => {
  try {
    const newPlayer = await Player.create({ teamName: req.body.name });
    console.log(newPlayer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
