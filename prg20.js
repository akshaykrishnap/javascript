// # # # #
// # # #
// # #
// #
for (row =4; row>=1; row--){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+ " *"
        
    }
    console.log(str);
}
console.log(` next------------------`);
// #
// # #
// # # #
// # # # # #
// # # # #
// # # #
// # #
// #
for (row =1; row<=5; row++){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+" *"
        
    }
    console.log(str);
}

for (row =4; row>=1; row--){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+ " *"
        
    }
    console.log(str);
}
console.log(` next------------------`);

//        *
//      *   *
//     *     *
// * * * * * * * 
for (row =1; row<=4; row++){               //1<=4
    str=""                                 //""
    for ( col = 1; col <=7; col++) {      //   1<=7  //2<=7 //3<=7 //4<=7 // 5<=7 //6<=7 //7<=7
    // 1<=7//2<=7//
        
       if (row+col==5 || col-row==3 || row==4) {  // 1-1=0nnot==5// 1+2=3 not==5//1-3== // 1+4=5==5 //1+6==//1+7==
      // 2+1 // 2+2 // 2+3
      
        str= str+"*"  // ###*
       }
       else{
        str = str+" "  // ### //###*### // 
       }
    }
  console.log(str);
    }
     
    //* * * * * *
    //*         *
    //*         *
    //*         *
    //*         *
    //*         *
    //* * * * * *
    console.log(` next------------------`);

    for (row =1; row<=7; row++){               //1<=4
        str=""                                 //""
        for ( col = 1; col <=5; col++)  {
            if (row==1 || row==7 || col==1 || col==5){
                str= str+" *" 
            }  
            else{
                str = str+"  "
        }
    } 
    console.log(str);
}
console.log(` next------------------`);
//
//                         #
//                       # # #
//                     # # # # #
//                   # # # # # # # 
//                     # # # # # 
//                       # # # 
//                         # 
//                         
for ( row = 1; row <=5; row++) {
str=""
    for ( spa =1; spa <=5-row; spa++) {
     str= str+" "
        
    }
    for ( col =0; col <2*row-1; col++) {
     
        str= str+"*"
    }
    console.log(str);
}
for ( row = 4; row >=1; row--) {
    str=""
        for ( spa = 4; spa >=row; spa--) {
         str= str+" "
            
        }
        for ( col =0; col <row*2-1; col++) {
         
            str= str+"*"
        }
        console.log(str);
    }
    


