const express = require("express");
const router = express.Router();
const fileName = "../../models/locations.json";
const productName = "../../models/products.json";
const locations = require(fileName);
const products = require(productName);

//get locations data
router.get("/", (req, res) => {
  res.json(locations);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const warehouse = locations.filter(location => location.id === id);
  const prod = products.filter(product => product.warehouseID === id);
  res.json([warehouse, prod]);
});
module.exports = router;
