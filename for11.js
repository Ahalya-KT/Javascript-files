//           *
//        *    *
//      *   *    *
//    *    *    *   *

// generate a row 
for(row=1;row<=4;row++){
    //  create a variable str to hold row content
    str=''
    // generate a for loop for creating space
    for(space=4;space>row;space--){
        // add space to the content of row
        str=str+' '

    }
    for(col=1;col<=row;col++){
        str=str+'* '
    }
    console.log(str);
}
