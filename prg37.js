// w.a.p.t. find common numbers in the given 2 arrays
// p=[ 10,11,12,20,30]
// q=[11,20,25,30,33]
// o/p= 11,20,30

p= [10,11,12,20,30]; //5
q= [11,20,25,30,33];//5
a=0
b=0
cout=0
isPrent=false
while (a<p.length && b<q.length) {  // 0<5 //1<5  //2<5 &&1<5 //3<5  //4<5 &&2<5 //4<5 && 3<5
    cout++
    if (p[a]==q[b]) {   // 10==11? //11==11 //12==20 //30==25 //30==30
        console.log(p[a]); //11 //20 //30
        isPrent=true
        a++
        b++
        
    } else if (p[a]<q[b]) {  //10<11 //12<20 //30<25
        a++
     
        
    } else { //30>25
       b++
    }
}
console.log(`the number step=${cout}`);
!isPrent && console.log(`no common numbers`);
console.log(`----------------------------------------`);
