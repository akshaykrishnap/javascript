// w.a.p. to print the largest num among 3
x1=33
x2= 44
x3= 55
if (x1>x2 && x1>>x3) {
    console.log(` the largest ${x1}`);
}else if (x2>x1 && x2>>x3) {
    console.log(` the largest${x2}`);
    
}
else if (x3>x1 && x3>x2) {
    console.log(` the largest ${x3}`);  
} else if (x2===x1 && x2>x3) {
    console.log(` the largest num are ${x1} & ${x2}`);   
}
else if (x2===x3 && x1>x) {
    console.log(` the largest num are ${x2} & ${x3}`);
}
else{
    console.log('all are equal');
}

// w.a.p. to find the 2nd largest num & arrange them in desending order

a=17
b= 16
c=15
if (a>b && a>c) {
    if (b>c) {
        console.log(`${b} is the 2nd Largest`);
        console.log(`the desending order is ${a} ${b} ${c}`);
    }
  else{
    console.log(`${c} is the 2n largest`);
    console.log(`the desending order is ${b} ${c} ${a}`);
  }  
}

else if (b>a && b>c) {
    if (a>c) {
        console.log(`${a} is the 2nd Largest`);
        console.log(`the desending order is ${b} ${a} ${c}`);
    }
  else{
    console.log(`${c} is the 2n largest`);
    console.log(`the desending order is ${b} ${c} ${a}`);
}
}
else if (c>a &&c>b) {
    if (a>b) {
        console.log(`${a} is the 2nd Largest`);
        console.log(`the desending order is ${a} ${b} ${c}`);
    }
  else{
    console.log(`${c} is the 2n largest`);
    console.log(`the desending order is ${b} ${a} ${c}`);
}
}
else{
    console.log('All number are equal');
}

// w.a.p. to print fizz when divisible by 3 and buss when divisible by 5 when divisible by 15

e= 75
if (e%15===0) {
   console.log(`fizzbuzz`); 
}
else if (e%5===0) {
    console.log(`buzz`);
    
}
else if (e%3===0) {
    console.log(`fizz`);
}