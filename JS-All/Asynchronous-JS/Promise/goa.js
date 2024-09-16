let gotoGoa=(success,failure)=>{
    let bank_Bal=6000;
    bank_Bal > 10000 ? success("Go and Enjoy"):failure("Go to Prostack! Practice Node JS")


}
gotoGoa((msg)=>{console.log(msg);},(err)=>{console.log(err)})