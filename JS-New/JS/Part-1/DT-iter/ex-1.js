let enames=['Rahul','Sonia','Priyanka','Modi']
//index       0        1         2         3

//print using for-of

for (ename of enames) {
    console.log(ename);
}

let emp={
    'id':101,
    'name':"Rahul",
    'sal':45000,
    'loc':"Bangalore"
}

for(prop in emp){
    console.log(emp[prop]);
}