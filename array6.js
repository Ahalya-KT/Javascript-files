array=[2,3,4,5]
// print the pair whose pair sum=6
//ans(2,4)=6

pairSum=6
for(i=0;i<array.length;i++)
{
    for(j=i+1;j<array.length;j++)
    {
        if(array[i]+array[j]==pairSum){
            console.log(`${array[i]},${array[j]}`);
        }
    }
}