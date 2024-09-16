class Account{
 open_Account(){
    console.log("Account Opened Successfully");
 }
 deposit_Amount(amount){
    console.log(`Amount- ${amount} -Deposited Successfully`);
 }
 withdrawl_Amount(amount){
    console.log(`Amount - ${amount} -Withdrawl successfully`);
 }
}
let a1=new Account();

a1.open_Account();
a1.deposit_Amount(5000);
a1.withdrawl_Amount(1000);