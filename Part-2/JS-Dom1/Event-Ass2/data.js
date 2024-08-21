function change_color(){
    //alert("test case 123")
    document.getElementById('abc').style.backgroundColor="red"
}

function change_case(){
    //alert("test")
    // let tag_ref=document.getElementById('xyz')
    // console.log(tag_ref);
    // let name= tag_ref.value;
    // console.log(name);

    let name=document.getElementById('xyz').value;
    console.log(name);

    document.getElementById('xyz').value = name.toUpperCase();
}