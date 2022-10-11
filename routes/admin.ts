import express from "express";

import path from "path";
import rootDir from "../util/path";

const router = express.Router();
router.get("/add-product", (_, res) => {
  res.sendFile(path.join(rootDir, "..", "views", "add-product.html"));
});
router.post("/add-product", (req, res) => {
  console.log(req.body);

  res.redirect("/");
});

export default router;
