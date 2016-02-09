/*
The third module should require the other two modules.
 It should have two function exports.
 The first function export should be the return of the first module being passed into the second module.
 The other function should be a simple text return that says “Account balance: \n”.
*/
var random = require('./random');
var toUsd = require('./usd');

var randomUsd = function(min, max){
    var newNumber = toUsd(random(min, max));
    return newNumber;
};

var balance = function(){
    var string = 'Acount ballance: \n ';
    return string;
};


exports.randomUsd = randomUsd;
exports.balance = balance;