var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('file1.txt', 'utf-8', function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('doing');
      res.write('<h1>Node.js</h1>');
      res.end(`<p>Hello World</p><br/><div>${data}</div>`);
    }
  });
  console.log('end');
}).listen(3000);
console.log("Http server id listening at port 3000");

// supervisor 监听代码改动， 不需要ctrl+C终止进程重启 supervisor 1.js