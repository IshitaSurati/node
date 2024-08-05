const express = require("express");
const dbConnect = require("./config/db");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
require('dotenv').config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(3000, () => {
  console.log("Listening on port 3000");
  dbConnect();
});
