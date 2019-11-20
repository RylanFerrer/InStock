const express = require("express");
const router = express.Router();
const fileName = __dirname + "/../../model/locations.json";
let locations = require(fileName);

//get locations data
router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;
