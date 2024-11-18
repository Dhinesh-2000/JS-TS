import React from "react";

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>Hello Dhinesh ,All the best for your React Journey</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'hello',className:'dummyClass'},
        React.createElement('h1',null,'Hello Dhinesh')

    )
}

export default Hello;