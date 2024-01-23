 // map()
 
 
 
 // w.a.p.t. print all the cube of given numbers in the array
 // w.a.p.t. to create new array with numbers<= increament or number >13 decrement the number // o/p=[11,12,12,14,13,14]
// o/p=[11,12,12,14,13,14]
 a=[10,11,12,12,14,15]
 cube=a.map((num)=>num**3)
 console.log(cube);

 newArray=a.map((num)=>num<=13?num+1:num-1)  // terinary opertor?-true and false condition
 console.log(newArray);