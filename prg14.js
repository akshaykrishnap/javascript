
// w.a.p.t. display whose expontenial is in the range of 8-36
// yoy can input the power /exponetials p=2 1=1   2=4   3=9  4=16 n// p=3  1=1  2=8  3=27 4=64
console.log(`Next problem`);
 
var power=3
var b=2


while (b<=36) {
if (8<=(b**power) && (b**power)<=36)
{
    console.log(b);
}
b++
}

console.log(`next`);
// declare a variable to store the limit
let limit = 10;

// use a for loop to iterate from 1 to limit
for (let i = 1; i <= limit; i++) {

  // check if i is less than or equal to 5
  if (i <= 5) {

    // print i
    console.log(i);
  }
}
