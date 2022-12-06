// Problem 1 : Check whether a number is Prime or not
let num=15
let count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
if(count==2){           //here is mistake put 2 on the place of 100;
    console.log("Prime")
}else{
    console.log("Not Prime")
}