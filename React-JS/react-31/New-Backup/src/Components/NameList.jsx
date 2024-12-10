import React from 'react'
import Person from './Person'

function NameList() {
     const names=['Dhinesh','Pranav','Sara','Dhinesh']
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
    //const personList=persons.map(person=><Person key={person.id} person={person}></Person>)
    const nameList=names.map((name , index)=> <h2 key={index}>{index}{name}</h2>)
  return (
    <div>
      {
        //personList
        nameList
      }
    </div>
  )
}

export default NameList
