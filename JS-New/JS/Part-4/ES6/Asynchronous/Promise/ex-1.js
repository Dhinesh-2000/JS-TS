let gotomovie=(success,failure)=>{
    let amount=600;
    if(amount>500){
        success("Go to Movie and Enjoy!")
    }
    else{
        failure("Go to Home and sleep well")
    }
}

gotomovie((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
})