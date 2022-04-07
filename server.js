const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Server page</title></head>");
    res.write("<body><h1>Hello from Node Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
  if (req.url === "/test") {
    console.log(req.url);
    res.write("<html>");
    res.write("<head><title>Test page</title></head>");
    res.write("<body><h1>This is test page.</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
