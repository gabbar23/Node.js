import express from "express";
import { getProducts } from "../../controllers/shopController/productController";

const router = express.Router();

router.get("/product-list", getProducts);

// router.get("/cart", getProducts);

// router.get("/checkout", getProducts);

// router.get("/product-detail", getProducts);

// router.get("/", getProducts);


export const shopRoutes = router;
