
// string method--1 spilt()& Array.from()
str="Good morning all"
// w.a.p.t. print all the vowels in the array
vowel=['a','e','i','o','u','A','E','I','O','U']
char=str.split('')
console.log(char);

for (let cha of char) {
   if (vowel.includes(cha)) {
    console.log(cha);
   } 
}

console.log('------or------');
str1="Good morning all"
char1=Array.from(str1).filter(v=>vowel.includes(v)).forEach(cha1=>console.log(cha1))  
//       console.log(char1);            // to check remove"//""       
