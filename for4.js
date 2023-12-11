// write a program to print reverse of a number
 var num=123
 var r=0
for(;num>0;)
{
    rem=num%10;
    r=r*10+rem
    num=Math.floor(num/10)
    
}
console.log(r)
