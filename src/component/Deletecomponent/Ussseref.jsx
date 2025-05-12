import React, { useRef } from 'react'

function Ussseref() {
const  inputref= useRef(null)

 const chnagetheref=()=>{
console.log(inputref.current.style)
 }

  return (
    <div className=' border  mt-9'>

         <input type="text" 
          ref={inputref}
         placeholder=' enter your name '
         name='name'
      className='form-control'
        
         
         />
         <button onClick={chnagetheref}>click</button>
      
    </div>
  )
}

export default Ussseref
