import { Request, Response } from "express";

import { Product } from "../../models/productModel";

export const getAddProduct = (_: Request, res: Response) => {
  // res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
  res.render("admin/add-product", {
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

export const editProduct = (_: Request, res: Response) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "/admin/edit-product",
  });
};

export const productListAdmin = (_: Request, res: Response) => {
  res.render("admin/product-list-admin", {
    pageTitle: "Admin Product List",
    path: "/admin/product-list-admin",
  });
};
