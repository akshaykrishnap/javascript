arr=[2,3,4,10,11,12]
// algoirthm
// 1)sort the array
// 2)find mid=(lower+upper)/2
// 3)check the search item is equal to middle value
// 4)if search item is greater than mid value- increment lower value by 1
// 5)if search item is less than mid value- dercement the upper index by 1
// 6)repeat these step until the value is obtained



low=0
up=arr.length-1
search=11
count=0

isPresent=false
/* 1) */
arr.sort((a,b)=>a-b)
console.log(arr);

/* 2) */
while (low<=up) {
    count++

    /* 3) */
    mid=Math.floor((low+up)/2)

    /* 4) */
    if(arr[mid]==search){
        isPresent=true
        break
    }

    /* 5) */
    else if (arr[mid]<search) {
        low=mid+1
    }
    
    /* 6] */
    else {
        up=mid-1
    }
}
console.log(` number of steps=${count}`);
console.log(isPresent?`found`:`not found`);