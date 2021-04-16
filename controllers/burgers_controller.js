const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.all((burgerData) => {
    const burgerObject = {
      burger_data: burgerData,
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/burgers/create", (req, res) => {
  burger.create(req.body.burger_name, (result) => {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", (req, res) => {
  const condition = req.params.id;
  burger.update(condition, (result) => {
    console.log(result);
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
