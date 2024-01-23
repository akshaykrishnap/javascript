fruits=['Kiwi','Orange','Apple','Pinapple','Grapes','Strawberry']

//diplay array
console.log(fruits);

//total number of items
console.log(fruits.length);

//print apple
console.log(fruits[3]);

// display the last fruit
console.log(fruits[fruits.length-1]);

// remove kiwi from array
fruits.shift()
console.log(fruits);

//add watermelon and mango
fruits.push('Watermelon')
console.log(fruits);

console.log('--------------------------');
//display all the fruits in array using- for loop
for (let i = 0; i <=fruits.length-1 ; i++) {
   console.log(fruits[i]);   
}
console.log('--------------------------');
//display all the fruits in array using-  for of
for (let item of fruits) {
    console.log(item);
}

console.log('--------------------------');
//display all the fruits in array using-
for (let index in fruits) {
console.log(fruits[index]);
}