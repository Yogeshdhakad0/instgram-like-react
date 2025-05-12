import React from 'react'

function Comnet({comment}) {
  return (
    <div className='ml-2 py-1'>
       <h1 className='font-bold'>{comment?.user}</h1>
       <div> {comment.text}</div>
    </div>
  )
}

export default Comnet
