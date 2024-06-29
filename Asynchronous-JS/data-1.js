let Employees=[
    {id:101,name:"Rahul",sal:45000},
    {id:102,name:"Sonia",sal:55000},
    {id:103,name:"Priyanka",sal:65000},
    {id:104,name:"Modi",sal:75000},
    {id:105,name:"Dhoni",sal:85000},
]

function displayData(){
    //alert("GM")
    let rows=""
    for (let Employee of Employees ) {
        rows=rows+`
        <tr>
        <td>${Employee.id}</td>
        <td>${Employee.name}</td>
        <td>${Employee.sal}</td>
      
      
        </tr>
         `
     
    }
    


document.getElementsByTagName('tbody')[0].innerHTML=rows
}


