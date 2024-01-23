// w.a.p.t. 
function greet(x,y) {
    console.log(`My Name is ${x}`);
    y()
}
function call(){
    console.log(`Hello`);
}
greet ('peter', call)


console.log(` next------------------`);
setTimeout(()=>{
    console.log(`inside settimeout FUNCTION`);
},10000)


console.log(` next------------------`);

function parent() {
    let parent1= "parent funtion"
    console.log(parent1);

    const child=()=>{
        let child1= "child function"
        console.log(child1);
    }
    child()
}

parent()