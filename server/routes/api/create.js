const express = require("express");
const router = express.Router();
const helper = require('../../helpers/helpers')
const warehouse = __dirname + "/../../models/locations.json";
const products = __dirname +  "/../../models/products.json";
const warehouseData = require(warehouse);
const productData = require(products)

router.post("/", (req, res) => {
  const {product,date,description,stock,quantity, warehouseId} = req.body
  const warehouse = warehouseData.filter(warehouse => {
    if(warehouse.id === warehouseId) {
      return true
    } else {
      return false
    }
  })
  const newProduct = {
    "item": product,
    "description": description,
    "ordered_by": warehouse[0].contact,
    "last_ordered": date,
    "quantity": quantity,
    "reference_number": "123456789",
    "location": `${warehouse[0].city}, ${warehouse[0].country}`,
    "status": stock,
    "key": helper.createID(),
    "warehouseID": warehouseId,
    "categories": warehouse[0].categories
  }
  productData.push(newProduct);
  helper.writeJSONFile(products,productData);
  return res.status(200).json(productData);
});

module.exports = router;
