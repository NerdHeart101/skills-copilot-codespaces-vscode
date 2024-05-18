// Create web server
// Create a web server that listens on port 3000. It should respond to a GET request to /comments with an array of comments.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    fs.readFile('./comments.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
