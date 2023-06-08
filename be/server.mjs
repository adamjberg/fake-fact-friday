import fs from "fs/promises";
import { createServer } from "http";

const server = createServer(async (req, res) => {
  let body = "";

  if (req.url === "/index.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    body = await fs.readFile("./fe/public/index.js", "utf-8");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    body = await fs.readFile("./fe/public/index.html", "utf-8");
  }

  res.end(body);
});

server.listen(process.env.PORT || 3000, () => { 
  console.log(`Server listening on port ${server.address().port}`);
})
