//variable-name(array-name)=[item1,item2......itemn]

weekdays=['monday','tuesday','wednesday','thursday']
 //to display array
 console.log(weekdays)

 //to display first element of an array

 console.log(`first element in this array is:`,weekdays[0]);


 //to find the total number of items in this array

 console.log(`total number of items in this array is:`,weekdays.length);

 //to display last element in this array
 console.log(`last element in this array is:`,weekdays[weekdays.length-1]);

//data type of an array
console.log(`type of an array`,typeof(weekdays));





 //methods of array

 //push() to add or insert new item to an array

 weekdays.push('friday')
 console.log(weekdays)

 //pop() to remove ab item from end of an array

 weekdays.pop()
 console.log(weekdays);

 //display array item one by one
 for(index=0;index<weekdays.length;index++);{
 console.log(weekdays[index]);
 }

 //for of
 console.log(`display array items one using for loop,of keyword`);
 for(let item of weekdays)
 console.log(item);

 //for in
console.log(`display array index`);
for(let ind in weekdays)
console.log(ind);