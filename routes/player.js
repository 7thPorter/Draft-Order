const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send();
});

router.post("/", async (req, res, next) => {
  try {
    const newPlayer = await Player.create({ teamName: req.body.name });
    res.sendStatus();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
