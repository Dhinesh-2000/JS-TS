//multilevel inheritance
class Grandparent{
    m1(){
        console.log('Grand Parent class m1 method');
    }
}
class Parent extends Grandparent{
  
    m2(){
        console.log('Parent class m2 method');
    }

}

class Child extends Parent{
    m3(){
        console.log('child class m3 method');
    }
}

let c1= new Child()

c1.m1()
c1.m2()
c1.m3()