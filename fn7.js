//validate email using inBuild function

function emailCheck(email) {
      
     return email.endsWith(`@gmail.com`)?`${email}: is valid`:`${email}: is invalid`
}
console.log(emailCheck(`ahalyakt@gmail.com`));