const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const productsJSON = "../../models/products.json";
const products = require(productsJSON);
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

module.exports = router;
