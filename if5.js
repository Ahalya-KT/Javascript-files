// 3- write a program to display second largest number and display all 3 numbers in any sorted order
       

   num1=20
   num2=30
   num3=10
   
   if(num1 > num2 && num1 > num3) {
    console.log('largest num1');
    if(num2 > num3){
        console.log('2nd largest is num2')
        console.log('ascending order',num3,num2,num1)
    }
    else{
        console.log('2nd largest num3',num2,num3,num1)
    }
   }

   else if( num2>num3 && num2>num1){
    console.log('largest num2');
    if(num1>num2){
        console.log('2nd largest num1');
        console.log('ascending order',num3,num1,num2)
    }
    else{
        console.log('2nd largest is num3');
        console.log('ascending order',num1,num3,num2)
    }
   }

   else if( num3>num1 && num3>num2){
    console.log('largest num3');
    if(num1>num2){
        console.log('2nd largest num1');
        console.log('ascending order',num1,num2,num3)
    }
    else{
        console.log('2nd largest is num3');
        console.log('ascending order',num1,num3,num2)
    }
   }

