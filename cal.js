function display(num){
    console.log(typeof(num)); //let content= doucument.getelementbyid('result')
    //console.log(content);
    result.value += num  // INPUT TAG ALWAYS RETURN AS STRING
    console.log(typeof(result.value));
  
}
function clearAll() {
    result.value=""
}
function back(){
    result.value=result.value.slice(0,-1)
}
function equal(){
   try{
    result.value=eval(result.value)
   }
catch (error){
    result.value='error'
    setTimeout(()=>{
        result.value=""
    },1000)
}
}