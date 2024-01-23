//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
console.log('---------');

//1. district having Highest +ve case 
console.log('1.)District having Highest +ve case is');
highest=covid_data.reduce((e1,e2)=>e1[3]>e2[3]?e1:e2);
console.log(highest[1]);
console.log('---------');

//2. district having Highest 1st dose vaccine
console.log('2.)District having Highest 1st dose vaccine');
f=covid_data.reduce((e1,e2)=>e1[5]>e2[5]?e1:e2);
console.log(f[1])
console.log('---------');

//3. district having lowest death rate
console.log('3.)District having lowest death rate');
g=covid_data.reduce((e1,e2)=>e1[3]<e2[3]?e1:e2);
console.log(g[1]);
console.log('---------');

//4. sort data with +ve case in descending order
console.log('4.) +ve case in descending order');
covid_data.sort((p1,q1)=>q1[2]-p1[2]).forEach(item=>{
    console.log(item[1]);
})

console.log('---------');

//5. is district with +ve cases > 15000
console.log('5.)District with +ve cases > 15000 is');
j=covid_data.some((d1)=>d1[2]>15000)
console.log(j?'yes':'no');
console.log('---------');

//6. sort data with 1st dose vaccine ascending order
console.log(' 6.)1st dose in ascending order');
covid_data.sort((p,q)=>p[5]-q[5]).forEach(item=>{
    console.log(item[1]);
})

console.log('---------');

//7. Print Thrissur details
console.log('---------');
console.log('7.)Thrissur details');
e=covid_data.filter(emp=>emp[1]=='Thrissur')
console.log(e);

//8. Print total number of positive cases

console.log('---------');
console.log('8.)Total number of positive cases');
total=covid_data.map(f1=>f1[2]).reduce((n1,n2)=>n1+n2)
console.log(total);
//9. Print total number of curred cases

console.log('---------');
console.log('9.)Total number of curred cases');
total1=covid_data.map(f4=>f4[4]).reduce((n3,n4)=>n3+n4)
console.log(total1);
console.log('---------');
//10. Print curred cases in Idukki
console.log('10.)Curred cases in Idukki');
k=covid_data.find(em=>em[1]=='Idukki')
console.log(k[4]);
console.log('---------');
