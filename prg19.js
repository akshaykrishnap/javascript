// *
// * *
// * * *
// * * * *
for (row =1; row<=4; row++){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+"*"
        
    }
    console.log(str);
}
console.log(` next------------------`);
// 1
// 1 2 
// 1 2 3 
// 1 2 3 4
for (row =1; row<=4; row++){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+col
        
    }
    console.log(str);
}

console.log(` next------------------`);
// 1
// 2 2 
// 3 3 3
// 4 4 4 4 
for (row =1; row<=4; row++){
    str=""
    for ( col = 1; col <=row; col++) {
        str = str+ row
        
    }
    console.log(str);
}
console.log(` next------------------`);
//       *
//     *   *
//   *   *    *
//  *  *   *    *
for(row=1; row<=4;row++){ // 1<=4 // 2<=4
    str=""
    for ( space=4 ; space>row ; space--) { // 1<=1/ 2<=1/ 1<=2/ 2<=2
        str= str+" " // ### // ##++
        
    }
    for( col=1;col<=row; col++){
        str= str+" *"
    }
console.log(str);// ### // ##** // #***/ *****

}