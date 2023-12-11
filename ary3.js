// expenses=[23000,34000,12000,45000,10000,50000]

//find the total expense
//find the lowest expense
//find the highest expense

expenses=[23000,34000,12000,45000,10000,50000]

sum=0
for(let num of expenses)
sum=sum+num
console.log(sum)


// lowest expense
lowest=expenses[0]
for (let exp of expenses){
    if(exp<lowest){
        lowest=exp
    }
}
console.log(`lowest expenses:`,lowest);

//highest expense
highest=0
for (let exp of expenses){
    if(exp>highest){
        highest=exp
    }
}
console.log(`highest expenses:`,highest);