import { tab } from '@testing-library/user-event/dist/tab'
import React from 'react'
import Coloumn from './Coloumn'

function Table() {
  return (
    <table>
        <tbody>
            <tr>
              <Coloumn/>  
            </tr>
        </tbody>
    </table>
  )
}

export default Table
