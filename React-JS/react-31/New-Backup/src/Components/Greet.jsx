import React from "react";

// function Greet(){
//     return <h1>Hello Dhinesh!</h1>
// }
const Greet = props =>{
    const {name,surname}=props
    return <div><h1>Hello {name} A K A {surname}</h1></div>
}

export default Greet;