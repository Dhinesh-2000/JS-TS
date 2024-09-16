let eids=[101,102,103,104]


//create new array based on existing Array
//group of elements as one entity
//elements stored based on indexing



//let new_eids=[]


// for (var i=0;i<=eids.length-1;i++) {
//    new_eids.push(eids[i])
    
// }

// for (let eid of eids) {
//   new_eids.push(eid)
    
// }

let new_eids=eids.map((eid)=>{
    return eid
})


console.log(eids);

console.log(new_eids);