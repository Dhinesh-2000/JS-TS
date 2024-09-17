function greet(){
    console.log(this);
}

greet()


let greet1=()=>{
    console.log(this);
}

greet1()