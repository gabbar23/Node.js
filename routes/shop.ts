import path from "path"

import express from "express";

const router=express.Router();

router.get("/",(_, res, _3) => {
    res.sendFile(path.join(__dirname,"../","../","views","shop.html"))
  });

export default router