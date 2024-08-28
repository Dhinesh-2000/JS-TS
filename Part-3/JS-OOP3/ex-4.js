class Test{
    constructor(name){
        console.log("Special Method: " + name);
    }
    get_Bal(){
        console.log("Normal method");
    }
}
let t1=new Test('Rahul')
let t2=new Test('Sonia')
let t3=new Test('Priyanka')

t1.get_Bal()
t1.get_Bal()
t1.get_Bal()
t1.get_Bal()
t1.get_Bal()
t2.get_Bal()
t3.get_Bal()
