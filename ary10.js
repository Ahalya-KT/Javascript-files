a=[1,3,2,4,6,7]
//find the highest number

//find the smallest number

//find total number

highest=a.reduce((num1,num2)=>num1>num2?num1:num2)
console.log('highest',highest);

lowest=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log('lowest',lowest);

sum=a.reduce((num1,num2)=>num1+num2)
console.log('sum',sum);

