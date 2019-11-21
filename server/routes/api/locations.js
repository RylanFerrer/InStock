const express = require("express");
const router = express.Router();
const fileName = "../../models/locations.json";
const locations = require(fileName);

//get locations data
router.get("/", (req, res) => {
  res.json(locations);
});

module.exports = router;
