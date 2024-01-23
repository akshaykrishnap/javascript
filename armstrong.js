var num=153
temp = num
var remainder=0
var sum=0
while (num>0) {
    remainder = num%10
    sum = sum + (remainder**3)
    num = Math.floor(num/10)
}
if (temp===sum) {
    console.log(`The number ${temp} is a amrstrong`);
    
} else {
    `The number ${num} is not a amrstrong`
}
