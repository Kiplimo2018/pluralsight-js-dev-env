var getDieRoll = function (dieSize) {
    var result = Math.ceil (dieSize * Math.random ());
    return result;
}

var roll = getDieRoll (6) ;

if (roll >= 5 ) {
    console.log ("Great roll!");
}
else if (roll <= 2) {
    console.log ( "That was a bad roll!")
}

console.log ( "You rolled a " + roll) ;