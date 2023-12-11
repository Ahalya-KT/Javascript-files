// 2- write a program fizz if a number is divisible by 3,buzz if a number is divisible by 5,fizz buzz if a number is 15

num=7
if(num%15==0)
console.log("fizzbuzz")
else if(num%5==0)
{
    console.log("fizz")
}
else if(num%3==0){
    console.log("buzz");
}
else{
    console.log('nothing to print');
}