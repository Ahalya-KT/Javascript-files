class Bank {
    accountDetails = {
        1000: {accNo:1000,userName:"userOne",password:"userOne",balance:50000},
        1001: {accNo:1001,userName:"userTwo",password:"userTwo",balance:5000},
        1002: {accNo:1002,userName:"userThree",password:"userThree",balance:10000},
        1003: {accNo:1003,userName:"userFour",password:"userOne",balance:6000},

    }



//1- validate account number function

     //check accNo is in accountDetails if present then  return true else false  

     validateAccount(accNo){
        return accNo in this.accountDetails ? true : false
     }

//2- authenticate account (accNo,password)

  
authenticateAccount(accNo,password) {
        //1-checkNo accNo is accountDetails if present then fetch it password and compare it with given password

        if (this.validateAccount(accNo)) {
            console.log(this.accountDetails[accNo]["password"]==password?'authentication successFull':'authentication failed');
        }
        //authentication failed
        else {
            console.log('authentication failed due to invalid account number');
        }
}
//3-balance enquiry function

balanceEnquiry(accNo){
    console.log(this.validateAccount(accNo)?`Account number: ${accNo} current balance is :${this.accountDetails[accNo].balance}`:'invalid account');
}





//4-function for fund transfer

 // function for fund transfer (fromAcno, toAcno, amount)

 fundTransfer(fromAccNo, toAccNo, amount) {

    // validation fromAcno, toAcno, amount if valid

    if (this.validateAccount(fromAccNo) && this.validateAccount(toAccNo)) {

        // check fromAcNo has sufficient balance
        if (this.accountDetails[fromAccNo]['balance'] >= amount) {

            // if yes debit amount from account and credit amount toAcno
            console.log(`initial balance of ${fromAccNo}=${this.accountDetails[fromAccNo]['balance']} and after fund transfer new balance is ${this.accountDetails[fromAccNo]['balance'] -= amount}`);

            console.log(`initial balance of ${toAccNo}=${this.accountDetails[toAccNo]['balance']} and after fund transfer new balance is ${this.accountDetails[toAccNo]['balance'] += amount}`);

            console.log('cash transfer successFull');
            }
            else {

                // else in sufficient balance
                console.log('insufficient balance');
            }
        }
        else {
            console.log('invalid account details');
        }
    }
}

var b1 = new Bank()

console.log(b1.validateAccount(1000) ? 'the given account is valid' : 'the given account is invalid');

b1.authenticateAccount(1000, "user")

b1.balanceEnquiry(1000)

b1.fundTransfer(1000, 1002, 10000)


