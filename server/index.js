const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.use("/products", require("./routes/api/products"));
app.use("/locations", require("./routes/api/locations"));
app.use("/create", require("./routes/api/create"));
app.listen(PORT, (req, res) => {
  console.log(`Server is listening on PORT ${PORT}`);
});
