//without filter

let numbers=[0,1,2,3,4,5,6,7,8,9,10]


let new_even_num=[]

for(num of numbers){
    if(num%2==0){
        new_even_num.push(num)
    }
}

console.log(new_even_num);