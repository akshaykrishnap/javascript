//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
console.log('All the product name is');
products.forEach(pro => {
    console.log(pro[1]);
});
console.log('---------');


//2. display product whose price < Rs.50
console.log('The products  whose price < Rs.50 is ');
price=products.filter(num=>num[2]>50)
console.log(price);
console.log('---------');

//3. print price of oreo
e=products.filter(emp=>emp[1]=='oreo')
console.log('The details of oreo is');
console.log(e);
console.log('---------');


//4. print costly product name
console.log('The costly product is:');
console.log(products.reduce((e1,e2)=>e1[4]>e2[4]?e1:e2));

console.log('---------');

//5. display out of stock product
 
console.log('All the product out stock is');
products.filter(pro => pro[3]==0).forEach(p=>console.log(p[1]))

console.log('---------');


//6. sort products based on stock in decsending order
products.sort((p,q)=>q[3]-p[3])
console.log(`Descending order on basis of stock is  `);
console.log(products);

console.log('---------');
//7. print product having maximum available stock
console.log('The maximum stock is:');
console.log(products.reduce((e1,e2)=>e1[3]>e2[3]?e1:e2));

console.log('---------');

//8. is there any product can be purchased by Rs.10
z=products.includes((n)=>n[2]===10)
console.log(z?'yes':'no');

console.log('---------');

//9. is there any product in the range of 10-30
z=products.some((n1)=>n1[2]>=10 && n1[2]<=30)
console.log(z?'yes':'no');

console.log('---------');

//10.print all products in the range of 10-30
r=products.filter(m1=>m1[2]>=10 && m1[2]<=30).forEach(p1=>console.log(p1[1]))

console.log('---------');