// w.a.p.t. print duplicate element from the given arrray
// a=[10,20,30,20,30,40,50,60,10] dupl=10,20,30


    b= [10,20,30,20,30,40,50,60,10] 
     for (let i = 0; i < b.length; i++) {
       for (let j = i + 1; j < b.length; j++) {
         if (b[i] === b[j]) {
          console.log(`${b[j]}`); 
         }
       }
     }
     
     console.log(`----------------------------------------`);
     // to check no duplicaton and truthy operator property -only when true conditions are satisfied

     a= [10,20,300,200,30,40,50,60,100] 
     isDuplicate =false
     for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
          if (a[i] === a[j]) {
            isDuplicate=true
           console.log(`${a[j]}`);
           break 
          }
        }
      }
      console.log(!isDuplicate && `no duplication`);


      console.log(`----------------------------------------`);
 
      c= [10,20,30,20,30,40,50,60,10]
      d=[]
      for (let i = 0; i < c.length; i++) {
        for (let j = i + 1; j < c.length; j++){
            if (c[i] === c[j] && !d.includes(a[i])){
     d.push(c[i]);
     break
            }   
        }
    
    }
console.log(d);