products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
for (let item of products){
    console.log(item.pName);
}

//2. print all mobile details whose display is lcd
products.filter(data=>data.display=="lcd").forEach(item=>console.log(item))

//3. print 5g mobile phone name
products.filter(data5g=>data5g.band=="5g").forEach(item=>console.log(item.pName))
//4. sort mobile based on price
products.sort((a,b)=>a.price-b.price).forEach(item=>console.log(item.pName))
console.log('--------------------------');
//5. print costly mobile
cp=products.reduce((c,d)=>c.price>d.price?c:d.pName)
console.log(cp);
console.log('--------------------------');
//6. print low cost mobile
lp=products.reduce((f,g)=>f.price<g.price?f:g.pName)
console.log(lp.pName);