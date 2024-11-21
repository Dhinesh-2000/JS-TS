import React from 'react'
import Person from './Person'

function NameList() {
    // const names=['Dhinesh','Pranav','Sara']
    const persons=[
        {
            id:1,
            name:'Dhinesh',
            age:24,
            skill:'React'
        },
        {
            id:2,
            name:'Pranav',
            age:21,
            skill:'Angular'
        },
        {
            id:3,
            name:'Sara',
            age:22,
            skill:'Java'
        }
    ]
    const personList=persons.map(person=><Person person={person}></Person>)
  return (
    <div>
      {
        personList
      }
    </div>
  )
}

export default NameList
