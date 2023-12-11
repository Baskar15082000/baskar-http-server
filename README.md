# HTTP Drills I

Go through the following link to learn the basics of the node `http` standard library.
[https://flaviocopes.com/node-module-http/](https://flaviocopes.com/node-module-http/)

Create a new project in Gitlab, the naming format is `<first_name>-http-server`. Write a program which will start a static server, and which would satisfy the following requests:

- **GET /html** - Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.

```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>
```

- **GET /json** - Should return the following JSON string

```
{
  "slideshow": {
    "author": "Yours Truly",
    "date": "date of publication",
    "slides": [
      {
        "title": "Wake up to WonderWidgets!",
        "type": "all"
      },
      {
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "Who <em>buys</em> WonderWidgets"
        ],
        "title": "Overview",
        "type": "all"
      }
    ],
    "title": "Sample Slide Show"
  }
}
```

- **GET /uuid** - Should return a UUID4. For example:

```
{
  "uuid": "14d96bb1-5d53-472f-a96e-b3a1fa82addd"
}
```

- **GET /status/{status_code}** - Should return a response with a status code as specified in the request. For example:

  - /status/100 - Return a response with 100 status code
  - /status/500 - Return a response with 500 status code

  Try it out for 100,200,300,400,500.

- **GET /delay/{delay_in_seconds}** - Should return a success response but after the specified delay in the request. For example: If the request sent is GET /delay/3, then the server should wait for 3 seconds and only then send a response with 200 status code.
