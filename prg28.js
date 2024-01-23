weekdays= ["Monday","Tuesday","Wednesday" ,4]
console.log(weekdays);
console.log(` next------------------`);


// w.ap.t. find the total number of items in a given array
weekdays= ["Monday","Tuesday","Wednesday" ,]
console.log(`Total number of the items in the given array :${weekdays.length}`);

// w.a.p.t. find total number of index position array
console.log(`Total number of the items in the given array :${weekdays.length-1}`);

// w.a.p.t. display the 1st item inthe array
console.log(`1st  items in the given array :${weekdays[0]}`);


//print wednesday
console.log(weekdays[2]);

//print the last item of a given array
console.log(weekdays[weekdays.length-1]);


 // to push or add items
weekdays.push('Thursday','Friday')
console.log(weekdays);

// to add sunday
weekdays.unshift(`Sunday`)
console.log(weekdays);


// to delete last item
weekdays.pop()
console.log(weekdays);


//to delete 1st item
weekdays.shift()
console.log(weekdays);
console.log(`---------------------------------------------------------------------------------------`);
for ( i = 0; i <= weekdays.length; i++) {
  console.log(weekdays[i]);
    
}