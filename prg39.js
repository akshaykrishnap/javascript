// w.a.p.t. print all the numbers greateer than 25=87,30,41,50 & sort them in ascending order

b=[[13,87],[25,3],[11,41],[50,30]]
a=b.flat()
c=[]
console.log(`2D array= ${a}`);
for (let item of a) {
  if (item>25) {
   c.push(item)
  }
}
console.log(`new array =${c}`);
c.sort((d,e)=>d-e)
console.log(`ascending order of the new array is `);
console.log(c);


console.log(`--------------------------`);
f=[[13,87],[25,3],[11,41],[50,30]]
g=f.flat(3)
ch=[]
console.log(`2D array= ${g}`);
for (let item of g) {
  if (item>25) {
   ch.push(item)
  }
}
console.log(`new array =${ch}`);
ch.sort((p,q)=>p-q)
console.log(`ascending order of the new array is `);
console.log(ch);