var getDieRoll = function (dieSize) {
    var result = Math.ceil (dieSize * Math.random ());
    return result;
};

var die = {
    size: 4
};

console.log (die);
console.log (die.size);

die.size = 10;

console.log (die.size);
