function getTime(){
    const time = new Date()
    console.log(time); // to access the system time and date
    const hour =time.getHours()     
    const min =time.getMinutes()
    const sec=time.getSeconds()
    
    
    clock.innerHTML =`${hour}:${min}:${sec}  `
setTimeout(()=>{
    getTime()
},1000)
}
getTime() //function call