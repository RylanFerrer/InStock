const express = require("express");
const router = express.Router();
const productsJSON = "../../models/products.json";
const products = require(productsJSON);

router.get("/", (req, res) => {
  res.JSON(products);
});

module.exports = router;
