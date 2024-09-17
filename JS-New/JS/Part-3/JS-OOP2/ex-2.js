class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    open_Account(){
        console.log("Account opened successfully");
    }
    deposit_Amount(){
        console.log("Amount deposited successfully");
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
a1.deposit_Amount()
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()

let a2 = new Account()
a2.open_Account()
a2.deposit_Amount()
a2.withdrawl_Amount()
a2.get_Bal()
a2.close_Account()

