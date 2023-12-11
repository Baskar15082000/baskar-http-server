const http = require("http");
const uuid = require("uuid");

const server = http.createServer((req, res) => {
  if (req.method == "GET" && req.url == "/html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      "<!DOCTYPE html> <html> <head> </head> <body> <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1> <p> - Martin Fowler</p> </body> </html>"
    );
  } else if (req.method == "GET" && req.url == "/json") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        slideshow: {
          author: "Yours Truly",
          date: "date of publication",
          slides: [
            {
              title: "Wake up to WonderWidgets!",
              type: "all",
            },
            {
              items: [
                "Why <em>WonderWidgets</em> are great",
                "Who <em>buys</em> WonderWidgets",
              ],
              title: "Overview",
              type: "all",
            },
          ],
          title: "Sample Slide Show",
        },
      })
    );
  } else if (req.method == "GET" && req.url === "/uuid") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(uuid.v4()));
  }
  if (req.url.startsWith("/status/")) {
    let arr = req.url.split("/");
    const getCode = arr[2];
    const statusMessages = {
      100: "Continue",
      200: "OK",
      300: "Multiple Choices",
      400: "Bad Request",
      500: "Internal Server Error",
    };

    if (statusMessages.hasOwnProperty(getCode)) {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(statusMessages[getCode]);
    } else {
      // Handle the case where the status code is not in the predefined list
      res.writeHead(400, { "content-type": "text/plain" });
      res.end("Invalid status code");
    }
  }
  if (req.method === "GET" && req.url.startsWith("/delay/")) {
    let arr = req.url.split("/");
    const sec = arr[2];
    setTimeout(() => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end("Response after delay " + sec);
    }, sec * 1000);
  }
});
const port = 3000;
server.listen(port, () => {
  console.log("listening");
});
