   // changing to object array
   
   weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
 
op={}


//print district with its highest temparature
for (let data of weatherData) {   //data ={district:'Thrissur',weather:29}
    district =data.district       //thrissur//kottayam//palakad//ernakulam//thrisur//kottayam//...
    currentTemp =data.weather     //32//29//34//33//29//30//
    if (district in op) {         //thrissur?op//kottayam?op//palakad?op//ernakullam?op//thrisuur?op//..
        oldTemp =op[district]     //32//29//
        if (oldTemp>currentTemp) { //32>29//29>30//...
            op[district]=oldTemp  //32
        }
        else{
            op[district]=currentTemp
        }
    } else {
        op[district]=currentTemp  //30
    }
}
console.log(op);

//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33

