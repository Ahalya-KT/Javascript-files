// write a program to display amstrong

  num=153
  input=num
  sum=0  
  while(num>0){
    rem=num%10;
    sum= sum+rem**3
    num=Math.floor(num/10);
  }
  console.log(input==sum?`${input}is an amstrong number`:`${input}is not a amstrong number`);   