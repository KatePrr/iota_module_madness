/*
In this challenge, you will need to spin up a new project (much like we did in lecture).
The first module will export a function that returns a random number after taking in a min and max value as arguments
(hint: you can use random number functions from previous assignments).
When you call this module, use '100' as your min, and '1000000' as your max.
*/

var random = function(min, max){
    var number =  Math.floor(Math.random()*(1 + max - min) + min);
    number = number.toString();
    return number;
    };

module.exports = random;
