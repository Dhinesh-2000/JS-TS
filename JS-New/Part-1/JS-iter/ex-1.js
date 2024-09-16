let eid=Symbol('uid')
let emp ={
    'eid':101,
    [eid]:2000
}

console.log("Employee ID",emp.eid);
console.log("User ID",emp[eid]);


for(property in emp){
    console.log(property);
} 