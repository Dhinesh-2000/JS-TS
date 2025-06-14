const numbers=[1,2,3,4,5,6,7,2,4,1,2,3,4,4,3,2,1,5,6];
const CountArr=(arr)=>{
    const freq={};
    arr.forEach(num => {
        freq[num]=(freq[num] || 0) +1;
    });
    return freq;

};
const result =CountArr(numbers);
console.log(result)