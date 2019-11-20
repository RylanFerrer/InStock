const express = require("express");
const router = express.Router();
const productsJSON = "../../models/products.json";
const products = require(productsJSON);

router.get("/", (req, res) => {
  console.log(products);
  res.status(200).json(products);
});

module.exports = router;
