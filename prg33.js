// w.a.p.t print whose pairsum is 6
//b=[2.3,4,5]  o/p =[2,4]
b=[2,3,4,5]
sum= 6
isPresnt= false
for (let i = 0; i < b.length; i++) {
    for (let j = i + 1; j < b.length; j++) {
        if (b[i] + b[j] === sum) {
            isPresnt=true
        console.log(`[${[b[i], b[j]]}]`);
          }
    }
  }

!isPresnt && console.log('no pair');

console.log(`----------------------------------------`);
// w.a.p.t. find common numbers in the given 2 arrays
// p=[ 10,11,12,20,30]
// q=[11,20,25,30,33]
// o/p= 11,20,30

p=[10,11,12,20,30]
q=[11,20,25,30,33]
count=0
ispresent=false
for ( i of p) {
  count++
    for ( j of q) {
     if (i==j) {
       ispresent=true
       console.log(i);
       break
     }   
    }
}
!ispresent && console.log(`no common numbers`);
console.log(`The number of steps =${count} `);