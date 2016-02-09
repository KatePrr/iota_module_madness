/*
 Finally, in the app.js, set up a server, write a 200 head,
 and write a message that combines the text return of the third module,
 concatenating the return from the third module that produces a dollar number.

 In the end, you terminal should produce the below result when you curl localhost:3000, ' Account balance: $156,301 '
 */




var http = require('http');
var balance = require('./balance');


http.createServer(function(req, res){
    res.writeHead(200);
    res.write(balance.balance() + balance.randomUsd(100, 1000000));
    res.end();
}).listen(3000);

console.log('Listening on port 3000');