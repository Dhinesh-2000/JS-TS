let user={id:101,
    name:'Rahul',
    email:'rahul@gmail.com'
}

let details={
    email:'rahul@gmail.com',
    sal:450000
}

let user_details={...user,...details}

console.log(user_details);