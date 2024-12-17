import React from 'react'

const Count = ({text,Count}) => {
    console.log(`Rendering ${text}`)
  return (
    <div>
      {text} - {Count}
    </div>
  )
}

export default React.memo(Count)
