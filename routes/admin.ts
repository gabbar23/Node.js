import express from "express";

// import path from "path";
// import rootDir from "../util/path";
const products: { title: string }[] = [];

const router = express.Router();
router.get("/add-product", (_, res) => {
  // res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product",path:"/admin/add-product" });
});
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });

  res.redirect("/"); 
});

export { products };
export default router;
