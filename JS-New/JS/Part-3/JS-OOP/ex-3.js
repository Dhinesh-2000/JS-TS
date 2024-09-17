
class Account{
    min_bal=500;
    open_Account(){
       console.log("Account opened successfully");
    }
    deposit_Amount(){
        console.log("Amount Deposited");
        
    }
    withdrawl_Amount(){
        console.log("Amount withdrawl");

    }
    get_bal(){
        console.log("Low Balance");

    }
    close_Account(){
       console.log("Account Closed");
    }
    
}

let a1= new Account()
a1.open_Account();
a1.deposit_Amount();
a1.withdrawl_Amount();
a1.get_bal();
a1.close_Account();

console.log(a1.min_bal);

