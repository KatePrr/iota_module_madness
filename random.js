var random = function(min, max){
    var number =  Math.floor(Math.random()*(1 + max - min) + min);
    number = number.toString();
    return number;
    };

module.exports = random;
