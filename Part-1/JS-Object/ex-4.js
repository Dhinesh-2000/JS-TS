//undefined vs error

let enames=['Rahul','Sonia','Priyanka','Modi']
//index        0       1        2         3

console.log(enames[0]);
console.log(enames[10]);

let emp={
    'id':101,
    'name':'Rahul',
    'sal':45000,
    'get_Details':function(){
        console.log("Displaying details");
    }
}

console.log(emp.id);
console.log(emp.name);
console.log(emp.sal);
console.log(emp.loc);
emp.get_Details();
emp.get_salary();
