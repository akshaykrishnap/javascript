var car={
    name:"punch",
    model:"eletric",
    manufacture:"TATA",
    price:"10lakhs",
}

//1) display the car name and manufacure name
console.log(car.name,car.manufacture);
console.log('----------------------');

//2) check "model" key is avaiable in car . if yes display its value
console.log("model" in car?`car name is ${car.name}`:"not model is present");
console.log('----------------------');
//3) add "varient" key to the object car with value as "manuel"
car.varient=["manuel"]
console.log(car);
console.log('----------------------');
//4) insert another value to "varient" key with value as "automatic"
car.varient.push("automatic")
console.log(car);
console.log('----------------------');
//5)add "color" key to object with values as "red","white" and "black"
car.color=["red","white","black"]
console.log(car);
console.log('----------------------');