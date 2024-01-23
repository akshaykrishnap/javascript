// w.a.p.t. to check whether a number is odd or even
function check(n1) {
console.log(`${n1} is ${n1%2===0 ? 'even': 'odd'}`); 
}
check(4)
console.log(` or------------------`);
function check(n1){
    if (n1%2==0) {
       console.log(` ${n1} number is even `); 
    } else {
        console.log(` ${n1} number is odd `);   
    }
}
check(45)
// w.a.p.t. to check whether a number is prime or nit
function prime( n2){
    isPrime = true
    for (let i = 2; i < n2; i++) {
if(n2%i==0){
    isPrime = false
    break
}
 console.log(isPrime? `${n2} is prime`:`${n2} is not a prime`);       
    }
}
prime(5)