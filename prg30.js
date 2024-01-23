// 
expense= [12000,23000,40000,34000,55000,24000,10000,14000]

// find the lowest expense
lowest=expense[0]
    for (let item of expense) {
      if (item<=lowest) {
        lowest=item
      }  
    }
console.log(`The lowest is ${lowest}`);


//find the highest expense
highest=expense[0]
for (let item of expense) {
    if (item>=highest) {
      highest=item
    }  
  }
console.log( `The highest is ${highest}`);


//find the total expense
total=0
for ( item of expense) {
    
}
