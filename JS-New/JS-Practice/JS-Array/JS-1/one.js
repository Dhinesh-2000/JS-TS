// function flatten(arr) {
//     return arr.flat(Infinity); // Flattens the array recursively
// }

// const lst = [1, 2, 1, 3, 4, 5, [[[8]]], 9];

// const uniqueSortedValues = [...new Set(flatten(lst))].sort((a, b) => a - b);

// console.log(uniqueSortedValues);

function flatten(arr){
   return arr.flat(Infinity);
}
  
 const  lst=[1,2,3,1,4,5,[[[8]]],[9]];

 const lst1=[...new Set(flatten(lst))].sort((a,b)=>a-b);
 console.log(lst1)