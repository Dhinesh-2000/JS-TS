let Employees=[
    {id:101,name:"Rahul",sal:46000},
    {id:102,name:"Sonia",sal:54000}
    
]

let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        Employees.push(emp);
        callback();
    },4000)

}
let displayData=()=>{
    setTimeout(()=>{
        let rows=""
        for ( emp of Employees) {
            rows=rows+`
                        <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                        </tr>
         `   
        }
        document.getElementById("abc").innerHTML=rows
    },2000)
    
}

createEmployee({id:103,name:"Priyanka",sal:60000},displayData)
//displayData()

