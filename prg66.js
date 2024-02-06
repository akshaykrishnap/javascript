console.log(`Evaluation of the given expression`);
try {
    expr="%10*2-2"
    const result = eval (expr)
    console.log(`Result is : ${result}`);
} catch (error) {
    console.log(`Invalid expression `);
}
finally{
    console.log("Task completed");
}
