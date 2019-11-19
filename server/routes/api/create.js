const express = require("express");
const router = express.Router();
const apiName = __dirname + "../../models/products.json";

router.get("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
