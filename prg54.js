// text ="hai hello all hello world"
// print the word count in the text as object - { hai:1,hello:2,world:1}

text="hai hello all hello world"  
char=text.split(" ")
console.log(char);  

// create an empty object

total=[]
for (let word in char) {  //hai//hello//all//hello//world
    if (word in total) {
        total.word+=1     //{hai:1,hello:2,all:1}
    }
    else{
        total.word=1      // {hai:1,hello:1,all:1}//{hai:1,hello:2,all:1,world:1}
    }
}
console.log(total);

wc={}
text.split(' ').forEach(word =>word in wc? wc[word]+=1:wc[word]=1 );
console.log(wc);
