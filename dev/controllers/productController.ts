import { Request, Response } from "express";

import { Product } from "../models/productModel";

export const getAddProduct = (_: Request, res: Response) => {
  // res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

export const postAddProduct = (req: Request, res: Response) => {
  const product = new Product(req.body.title);
  product.save();
  // products.push({ title: req.body.title });
  res.redirect("/");
};

export const getProducts = (_: Request, res: Response) => {
  // res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
  Product.fetchAll((products: []) => {
    res.render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      
    });
  });
};
