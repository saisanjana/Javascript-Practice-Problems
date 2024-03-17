const ComputeAmount = function(){
    // ... your code goes here...
    let amount = 0;
    return {
        value: function(){
            return amount;
        },
        lacs: function(arg){
            amount = amount + arg*100000;
            console.log(amount)
            return this
        },
        thousand: function(arg){
            amount = amount + arg*1000;
            return this
        },
        ten: function(arg){
            amount = amount + arg*10;
            return this
        },
        unit: function(arg){
            amount = amount + arg*1;
            return this
        },
        crore: function(arg){
            amount = amount + arg*10000000;
            return this
        }
    }
  }
  console.log(ComputeAmount().lacs(9).value())
  const amount = ComputeAmount().lacs(9).lacs(1).thousand(10).ten(1).unit(1).value();
  console.log(amount,"here")
  console.log(amount === 1010011); // true
  
  const amount2 = ComputeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
  console.log(amount2 === 143545000);

  
  