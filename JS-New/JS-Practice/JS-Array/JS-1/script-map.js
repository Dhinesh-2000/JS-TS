//Array 
//map,filter,reduce

const nums=[1,2,3,4]

const multiThree = nums.map((num,i,arr)=>{
    return num*3+i
})
console.log(multiThree)