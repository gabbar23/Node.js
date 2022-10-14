import fs from "fs";
import path from "path";
import rootPath from "../util/path";
export class Product {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  save() {
    const p = path.join(rootPath, "data", "products.json");

    fs.readFile(p, (err, fileContent: any) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb: CallableFunction) {
    const p = path.join(rootPath, "data", "products.json");
    fs.readFile(p, (err, fileContent: any) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}
