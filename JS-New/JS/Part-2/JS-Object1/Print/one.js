let emp={
    'id':101,
    'name':"Rahul",
    'sal':45000
}

 let emp_str='{"id":101,"name":"Rahul","sal":45000}'

 console.log(JSON.stringify(emp));
 console.log(JSON.parse(emp_str));