import http from "http";
import fs from "fs";
// function rqListner(req:any,res:any){

// }

const server = http.createServer((req, res) => {
  console.log(req.headers, req.url, req.method);
  const method = req.method;
  if (req.url == "/") {
    res.write(`<html lang="en">
  <head>
      <title>Form</title>
  </head>
  <body>
  <form action="/message" method="post"><input type="text" name="message"> <button type="submit">send</button></form>
  </body>
  </html>`);
    return res.end();
  }
  if (req.url == "/message" && method == "POST") {
    const body: any = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("myfile", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});
server.listen(3000);
