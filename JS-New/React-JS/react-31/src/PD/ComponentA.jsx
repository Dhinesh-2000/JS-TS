import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let name="Rahul Gandhi"
  return (
    <div>
      <h3>ComponentA</h3>
      <hr />
      <ComponentB/>
    </div>
  )
}

export default ComponentA
