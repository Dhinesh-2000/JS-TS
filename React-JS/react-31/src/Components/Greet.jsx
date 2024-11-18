import React from "react";

// function Greet(){
//     return <h1>Hello Dhinesh!</h1>
// }
const Greet =(props)=>{
    console.log(props);
    return <h1>Hello {props.name} A K A {props.surname}</h1>
}

export default Greet;