// w.a.p.t print whether id is mail or not
 var mail=(email)=>{
 return   email.endsWith('@gmail.com')?`${email} is a mail`:`${email} is not a mail`
}
 
console.log(mail('abd@gmail.com'));
//w.a.p.t. print a given word starts with q or not

var word=(e)=>{
    return e.startsWith('q')||e.startsWith('Q')?`${e} word starts with q letter`:`${e} does not starts with q letter`
}
console.log(word('Query'));