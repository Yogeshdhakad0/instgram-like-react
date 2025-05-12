import React, { useState } from 'react'

function Preview() {
  const[count,setcount]=useState(1)

const headlarchange=()=>{
  setcount(count+1)
}
 const headlarchangeascny =()=>{
  setTimeout(() => {
 setcount((prive)=>{
  return prive+1
 })
  }, 5000);
 }

  return (
    <div className='mt-5 border-b-0'>
      
<h1>coun: {count}</h1>

<button className='border bg-sky-400 py-2 px-4  mx-2' onClick={headlarchange}>
incress
</button>

<button className='border bg-sky-400 py-2 px-4  mx-2' onClick={headlarchangeascny}>
incresasunk
</button>

    </div>
  )
}

export default Preview
