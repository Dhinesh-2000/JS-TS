let prices=[9,99,199,299,399,499,599]

//except 299

/*for(price of prices){
    if(price===299)
        break
    console.log(price);
}*/

for(price of prices){
    if(price===299)
        continue
    console.log(price);
}