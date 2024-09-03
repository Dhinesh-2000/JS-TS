let emp={
    id:101,
    name:'Rahul',
    sal:45000,
    email:'rahul@gmail.com'
}

let user ={...emp}

console.log(user);

//merge objects

let details={
 email:'rahul@ibm.com',
 loc:'wayanad'
}


let emp_Details={...emp,...details}
console.log(emp_Details);