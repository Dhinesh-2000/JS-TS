import React from 'react'

function Coloumn() {
   const items=[] 
  return (
    <>
        {/* {
            items.map(item=>(
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        } */}
      <td>Name</td>
      <td>Dhinesh</td>
    </> //cannot pass key inside this.
  )
}

export default Coloumn