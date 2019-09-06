var die = { roll : function () {
        var result = Math.ceil (this.size * Math.random ());
        this.totalRolls += 1;
        return result;
    }
};

die.size = 10;
die.totalRolls = 0;


console.log (die.roll());

console.log (die.roll());

console.log (die.roll());


console.log (die);


