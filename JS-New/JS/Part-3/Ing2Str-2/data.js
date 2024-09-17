var reader;

let convertImg2Str=()=>{
 let imageFile=document.getElementById('img_file').files[0];
 reader= new FileReader();
 reader.readAsDataURL(imageFile)
 reader.addEventListener("load",()=>{
    document.getElementById('str_tag').innerHTML=reader.result;
 }
)
}

let str2Img=()=>{
    console.log(reader.result);
    document.getElementById('img_tag').src=reader.result;
}