class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("Account opened successfully");
    }
    deposit_Amount(amount){
        console.log(amount,"-Amount deposited successfully");
    }
    withdrawl_Amount(){
        console.log("Amount withdrawl");
    }
    get_Bal(){
        console.log("get bal method");
    }
    close_Account(){
        console.log("Account closed");
    }

}

let a1=new Account()
a1.open_Account()
a1.deposit_Amount(5000)
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()


