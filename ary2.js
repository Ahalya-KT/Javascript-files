//input[4,5,6]
//output[11,10,9]

input=[4,5,6]
console.log(`input=`,input);

output=[]

// find the total sum of input
sum=0
for(let num of input){
    sum=sum+num
}
//fetch one by one from input and subtract from total sum

for(let num of input){
    sum-num
    // push result in to empty output array
    output.push(sum-num)
}
console.log(`output`,output);