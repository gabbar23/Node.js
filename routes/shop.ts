import express from "express";

import path from "path";
import rootDir from "../util/path";

const router = express.Router();

router.get("/", (_, res, _3) => {
  res.sendFile(path.join(rootDir, "..", "views", "shop.html"));
});

export default router;
