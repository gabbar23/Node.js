import express from "express";

import { getAddProduct,postAddProduct } from "../controllers/productController";


const router = express.Router();
router.get("/add-product", getAddProduct);

router.post("/add-product",postAddProduct );


export default router;
