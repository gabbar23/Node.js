import express from "express";

const router = express.Router();
router.get("/add-product", (_, res) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">send</button></form>'
  );
});
router.post("/add-product", (req, res) => {
  console.log(req.body);

  res.redirect("/");
});

export default router;
