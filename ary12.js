products=[
    //[id,name,price,stock]
    [1,'hideSeek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parLeg',25,0],
    [5,'tiger',20,30],
    [6,'uniBic',60,20],
    [7,'good day',70,20]
]

//1. display all products name --foreach

    products.forEach(item=>console.log(item[1]));
    console.log('**************************');

//2.display products whose products <50 -- filter

    products.filter(n=>n[2]<50).forEach(item=>console.log(item[2]));
    console.log('**************************');
    

//3.print price of oreo --find
        bisCut=products.find(n=>n[1]=='oreo')
        console.log('oreo price----',bisCut[2]);
        console.log('**************************');

//4.print costly product name---reduce

    big=products.reduce((n1,n2)=>n1>n2?n1:n2)
        console.log('costly product----',big[1]);
        console.log('**************************');

//5.display out of stock product --filter
      products.filter(item=>item[3]==0).forEach(item => console.log('out of stock:',item[1]));

