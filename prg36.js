// w.a.p.t print whose pairsum is 6
//b=[2.3,4,5]  o/p =[2,4]
a=[2,3,4,5]
sum=11
isPresnt= false
low=0
up=a.length-1
while (low<up) {
    currentsum=a[low]+a[up]

    if (currentsum==sum) {
        console.log(`{${a[low]},${a[up]}}`);
       isPresnt=true
        low++
    }
    else if(currentsum>sum){
        up--
    }
    else{
        low++
    }
}
!isPresnt && console.log(`pair not found`);