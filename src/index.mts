import http from "http";

import { sum } from "@/lib/util.mjs";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello, World! 2 + 2 is: ${sum(2, 2).toString()}`);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
