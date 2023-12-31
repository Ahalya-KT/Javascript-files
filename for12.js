          // *
       // *     *
    //*            *
//  *  *  *  *   *  *   *  

// logic
//row+col=5       //col-row=3
//1,4             //4,7
//2,3             //3,6
//3,2             //2,5
//4,1            //1,4


//generate a loop for row=4

// create a variable for hold row data

//generate a loop for col=7

//to display content in each column based on condition row==4||row+col=5||col-row=3

//after column loop display the row content

for(row=1;row<=4;row++){
  str=''
  for(col=1;col<=7;col++){
    if(row==4||row+col==5||col-row==3){
      str=str+ '* '
    }
    else{
      str=str+'  '
    }
  }
  console.log(str);
}

