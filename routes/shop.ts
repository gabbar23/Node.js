import express from "express";

// import path from "path";
// import rootDir from "../util/path";

import * as adminData from "./admin";
const router = express.Router();

router.get("/", (_, res, _3) => {
  // res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
  res.render("shop", {
    pageTitle: "Shop",
    prods: adminData.products,
    path: "/",
  });
});
 
export default router;
