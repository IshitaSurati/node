const { Router } = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controllers");

const productRouter = Router();

productRouter.get("/", getProducts);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
