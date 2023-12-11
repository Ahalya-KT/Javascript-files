//check the given mobile number is valid or invalid using InBuild function

function mobileCheck(mobile){
    return mobile.length==10?`${mobile}:number is valid`:`${mobile}:number is invalid`
}
console.log(mobileCheck(`9961760535adc`));