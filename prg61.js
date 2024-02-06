class bank {
    accountDetails={
        1000:{acno:1000,username:'oneone',password:'oneone',balance:50000},
        1001:{acno:1001,username:'twoone',password:'twoone',balance:5000},
        1002:{acno:1002,username:'threeone',password:'threeone',balance:1000},
        1003:{acno:1003,username:'fourone',password:'fourone',balance:6000},
    }

//method to validte account number
validateAccount(acno){
    return acno in this.accountDetails?true:false
}

//method to autheicate the account
authenticateAccount(acno,pswd){
    if (this.validateAccount(acno)) {
        if (this.accountDetails[acno].password==pswd) {
            console.log('Successfull authentification');
        } else {
          console.log('invalid password');
        }
    } else {
        console.log('Invalid accont number');
    }
}

//method to check the balance
getBalance(acno,pswd){
    if (this.validateAccount(acno)) {
        if (this.accountDetails[acno].password==pswd) {
           console.log(`current balance:${this.accountDetails[acno].balance}`); 
        } else {
            console.log('invalid password');  
        }
    } else {
        console.log('Invalid accont number'); 
    }
}

//method to fund transfer
fundTransfer(fromacono,fromacnopswd,toacno,amount){
if (this.validateAccount(fromacono) && this.validateAccount(toacno)) {
   if (this.accountDetails[fromacono].password==fromacnopswd) {
    if (this.accountDetails[fromacono].balance>amount) {
        console.log(`current balance is ${fromacono} is ${this.accountDetails[fromacono].balance}`);
        console.log(`current balance is ${toacno} is ${this.accountDetails[toacono].balance}`);   
        this.accountDetails[fromacono].balance-=amount
        this.accountDetails[toacno].balance+=amount
        console.log(`new balance is ${fromacono} is ${this.accountDetails[fromacono].balance}`);
        console.log(`new balance is ${toacono} is ${this.accountDetails[toacono].balance}`);
    } else {
        console.log(`insufficent balance`);
    }
   } else {
    console.log(`insufficent password`);
   } 
} else {
    console.log(`insufficent accounts`);
}
}

}


const obj=new bank
console.log(obj.validateAccount(1100)?'account exist':'account does not exist')

const obj1=new bank
obj1.validateAccount(1000,'oneone')

const obj2 = new bank
obj2.authenticateAccount(1000,`oneone`)
obj2.fundTransfer(1000,`oneone`,1002,50000)