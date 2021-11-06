const express = require("express");
const router = express.Router();
const { Player } = require("../server/db/index");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Player.findAll());
  } catch (error) {
    next(error);
  }
});

router.delete("/:teamName", async (req, res, next) => {
  console.log(req);
  try {
    await Player.destroy({
      where: {
        teamName: req.params.teamName,
      },
    });
    res.send();
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newPlayer = await Player.create({ teamName: req.body.name });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
