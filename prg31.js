// w.a.p.t. check whether 2 in preset in the array [10, 11, 12, 3, 2, 4, 56]

set = [10, 11, 12, 3, 2, 4, 56];
 num = 2;
 present = false;

for ( element of set) {
  if (element === num) {
    present = true;
    break;
  }
}

if (present) {
  console.log(`The number ${num} is present in the array.`);
} else {
  console.log(`The number ${num} is not present in the array.`);
}

console.log(`----------------------------------------`);

// w.a.p.t.  such that input of an array as [4,5,6] 
// o/p array is [11,10,9]
set1=[4,5,6]
sum=0
set2=[]
for (let item of set1) {
 sum= sum+item  
}
for (let item of set1) {
 set2.push(sum-item)   
}
console.log(set2);


console.log(`----------------------------------------`);




