product=[

    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samSung',band:'5g',price:4500,display:'led'},
    {pid:102,pName:'blackBerry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'Icd'},
    {pid:104,pName:'motorla',band:'4g',price:10000,display:'Icd'},

]

//1- print product name only
    product.forEach(item=>console.log(item['pName']));
    console.log('-------------------');


 //2-print all mobile details whose display is Icd
    product.filter(item=>(item['display'])=='Icd').forEach(item=>console.log('icd',item));
    console.log('-------------------');

//3-print 5g mobile based on price 
    product.filter(item=>(item['band'])=='5g').forEach(item=>console.log(item['pName'],item['price']));
    console.log('-------------------');

//5-print costly mobile
    item=product.reduce((n1,n2)=>n1>n2?n1:n2)
    console.log('costly products',item['pName'],item['price']);
    console.log('-------------------');

//6-print low cost mobile
    item=product.reduce((n1,n2)=>n1.price<n2.price?n1:n2)
    console.log('lowest products',item['pName'],item['price']);



    