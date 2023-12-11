//print duplicate element
array=[10,20,30,10,30,40,40,50,20,60,70]


isDuplicate=false
//step1:get each element array one by one (normal for loop)
for(i=0;i<Array.length;i++){
//   step2:compare the elements with rest of elements in the array
for(j=i+1;j<array.length;j++){
    //step 3:both numbers are same print
    if(array[i]==array[j]){
        isDuplicate=true
        console.log(array[i]);
        break
    }
}
}