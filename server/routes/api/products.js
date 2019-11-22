const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const productsJSON = __dirname + "/../../models/products.json";
const products = require(productsJSON);
const helper = require("../../helpers/helpers");

app.use(cors());
router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const found = products.some(
    product => product.key.toString() === req.params.id.toString()
  );
  if (found) {
    res.json(
      products.filter(
        product => product.key.toString() === req.params.id.toString()
      )
    );
  } else {
    console.log("Not found");
  }
});

router.delete("/:id", (req, res) => {
  const productID = req.params.id;
  console.log(productID);
  const productUpdate = products.filter(product => product.key !== productID);
  console.log(productUpdate);
  helper.writeJSONFile(productsJSON, productUpdate);
  res.status(200).json(productUpdate);
});

module.exports = router;
