import { Request, Response } from "express";


const products: { title: string }[] = [];

export const getAddProduct=(_:Request, res:Response) => {
    // res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
    res.render("add-product", { pageTitle: "Add Product",path:"/admin/add-product" });
  }


export const postAddProduct= (req:Request, res:Response) => {
    products.push({ title: req.body.title });
  
    res.redirect("/"); 
  }


export const getProducts=(_:Request, res:Response) => {
    // res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
    res.render("shop", {
      pageTitle: "Shop",
      prods: products,
      path: "/",
    });
  }