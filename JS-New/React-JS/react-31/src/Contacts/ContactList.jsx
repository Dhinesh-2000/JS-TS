import React from 'react'
import Contact from './Contact'

const ContactList = (props) => {
  let buddySelect =(contact)=>{
    props.selContact(contact)
  }
  return (
    <div>
      <h3>Contact List</h3>
      <pre>{JSON.stringify(props)}</pre>
      <table className='table'>
         <thead className='bg-primary text-white'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
         </thead>
         <tbody>
            {
                props.contact.map((contact,index)=>{
                    return <tr key={index} onClick={buddySelect.bind(null,contact)}>
                                <td>{contact.name.first}</td>
                                <td>{contact.email}</td>
                                <td>{contact.location.city}</td>
                            </tr>
                })

            }
        </tbody>
      </table>
    </div>
  )
}

export default ContactList
