// w.a.p.t. find the LCM (other than 1)  of a given
// EG 12- 1 2 3 4  6 12
// EG 28- 1 2 4 7 14 28
// cf-  1 2 4 -//2
num1 =12
num2 =28
for ( i = 2; i <num1; i++){
if (num1%i==0 && num2%i==0) {
    lcm =i
    break
}
 
}  
console.log(`1cm of ${num1} and ${num2} is ${lcm}`);