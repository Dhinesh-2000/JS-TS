let employees=[
    {"id":101,"name":"Rahul",sal:45000},
    {"id":102,"name":"Sonia",sal:55000},
]

let createEmployee=(emp)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let flag=true;
        flag?resolve("Data Inserted"):reject("Failed")
        employees.push(emp)
       },4000);
    })
}
let getEmployee=()=>{
    setTimeout(()=>{
       let rows=""
       for (employee of employees) {
           rows=rows+`<tr>
                      <td>${employee.id}</td>
                      <td>${employee.name}</td>
                      <td>${employee.sal}</td>
           
           </tr>`
           
       }
       document.getElementById('table_Data').innerHTML=rows
    },2000)
   }
   

let execute=async ()=>{
    await createEmployee({"id":103,"name":"Priyanka",sal:65000})
    getEmployee()
}
execute()