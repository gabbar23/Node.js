import express from "express";

import {
  editProduct,
  getAddProduct,
  postAddProduct,
  productListAdmin,
} from "../../controllers/adminController/adminProductController";

const router = express.Router();

router.get("/add-product", getAddProduct);

router.post("/add-product", postAddProduct);

router.get("/edit-product", editProduct);

router.get("/product-list-admin",productListAdmin);

export const adminRoutes = router;
