//loops - for , while , do while ,for each , for-in, for-of

for(let i=1 ; i<11; i++){
    console.log(i);
}

//while

let a=10;
while(a>0){
    console.log(a);
    a--;
}

//using for loop try to print the multiple of 2 till 20 from 2
console.log("2 mul");
 for(let i=2 ; i<=20 ; i=i+2){
     console.log(i);
 }


 console.log("2 multiples");
j=1;
while(j<=10)
{
    k=j*2;
    console.log(k);
    j++;
}


//do while
console.log("do while");
 let c=2;
 do{
     console.log(c);
     c=c+2
 } while(c <=20);

//------for-in loop-used to fetch the indexes of the array

//for-in loop

let names= ["ss", "mm","nn"];
for(let i in names){
    console.log(i);
}
//------for-in loop-used to fetch the values of the array
//for-of loop

for(let values of names){
    console.log(values);
}

//for each loop-it is like very important....
names.forEach((values,index)=>{                      //foreach is the method
 console.log(index,values); //the 1st parameter accepts teh values of the array
 //and the second parameter accepts the indexes of the array...
})     
