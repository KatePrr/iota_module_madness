var http = require('http');
var balance = require('./balance');


http.createServer(function(req, res){
    res.writeHead(200);                     // any communication from server to head has wrightHead code
    res.write(balance.balance() + balance.randomUsd(100, 1000000));                    // send response(res).what type
    res.end();
}).listen(3000);                            // specify port we're going to listen throug

console.log('Listening on port 3000');