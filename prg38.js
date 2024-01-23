// nested array
a=[[10,23],[34,50],[2,4],[57,89],[7,9]]

// w.a.p.t. print all numbers less than 10-2,4,7,9
less=10
console.log(`method 1`);
//    for (let subarray of a) {                     // subarray 
//    console.log(subarray);                       //  displays subarrays [10,23]etc to check remove"//"
//    for (let b of subarray) {
        
        

//    if (b<10) {
//    console.log(b);
//    }
//    }
//    }

console.log(`method 2`);
b=a.flat()
console.log(b);
for (let item of b) {
  if (item<10) {
    console.log(item);
  }
}