const calculator = {
    // your code goes here...
    total :0,
    add: function(arg){
        this.total +=arg
        return this;
    },
    subtract: function(arg){
        this.total -= arg
        return this;
    },
    divide: function(arg){
        this.total /= arg
        return this;
    },
    multiply: function(arg){
        this.total *= arg;
        return this;
    }
 };
 
 calculator.add(10).subtract(2).divide(2).multiply(5);
 console.log(calculator.total);