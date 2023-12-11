userDetails ={
    "max" :{username:"max" , password:"max"},
    "sana" :{username:"sana" , password:"sana"}

}

//to save data in local storage
function saveData(){
    if(userDetails){
        localStorage.setItem("database",JSON.stringify(userDetails))
    }
}


//to get data from local storage
function getData(){
    userDetails=JSON.parse(localStorage.getItem("database"))
}

// function for register
function register(){
    let uname=regUname.value
    let Pswd=regPswd.value

    if(uname && Pswd){
// verify user name in userDetails
       if(uname in userDetails){
        output.innerHTML ="User already exist.........please login"
       }
       else{
        // not present
        userDetails[uname]={username:uname,password:Pswd}
        console.log(userDetails);

        //to save user details in local storage
        saveData()
        alert("register successfully")

        //redirect loginPage
        window.location="login.html"
       }
    }
    else{
        output.innerHTML ="Please enter valid input.."

    }
}

// function login 
function login(){
        let usname=loginUname.value
        let psswd=loginPswd.value

        getData()
       if(usname&&psswd){
            if(usname in userDetails){
          if(psswd==userDetails[usname].password){
            //login success
            alert('login success')
            //redirect to home page
            window.location="home.html"
          }  
          else{
            output.innerHTML="invalid password"
          }
       } 
       else{
        output.innerHTML="invalid password"
       }
    }
    
       else{
        output.innerHTML="please enter a valid input"
       }
}