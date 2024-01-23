

      // w.a.p.t print using for loop which have the ability upto loop upto 10 but prints only upto 5      
      console.log(`next`);

      limit = 10;


      for (let i = 1; i <= limit; i++) {
      
      
        if (i <= 5) {
      
          console.log(i);
        }
      }
      console.log(`or`);
      console.log(`next`);

      limit = 10;


      for (let i = 1; i <= limit; i++) {
      console.log(i);
      
        if (i >= 5) {
      
        break
        }
      }

      console.log(`-------------------------------
      `);
    // w.a.p.t check whether a number is prime number or not
  e=5
 isPrime= true

 for ( i = 2; i <e ; i++) {
   if (e%i==0) {
   isPrime =false
   break
   } 
   console.log(isPrime? `${e} is prime`:`${e} is not a prime`);
 }
