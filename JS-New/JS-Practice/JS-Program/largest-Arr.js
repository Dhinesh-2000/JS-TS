function findLargest(arr){
    let largest =arr[0];
    for(let i=1;i<=arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    return largest;
}
console.log(findLargest([99,2,4,100,1]));