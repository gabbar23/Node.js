import express from "express";

import bodyParser from "body-parser";

import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((_, res) => {
  res.status(404).send("No page exist");
});
app.listen(3000);
