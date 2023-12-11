//find the common number in the given array

a=[10,11,12,20,30]
b=[11,20,21,30,31]


for(let x of a){
    for(let y of b){
        if(x==y){
            console.log(x);
        }
    }
}