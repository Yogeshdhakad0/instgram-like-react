import React, { useMemo, useState } from 'react'

function Momes() {
    const [count ,setcount]=useState(1)
    const [theme,settheme]=useState(false)

const  evnetheadlar=(num)=>{
    for(let i=0;i<500;i++){
        console.log(i)
    }
    return num*2
}
const themeheadrla=()=>{
    settheme(preve => preve ? false:true)
}


const evnetheadlara=useMemo(()=>{
     return evnetheadlar(count)
},[count])
console.log(evnetheadlara)
  return (
    <div className={theme? 'bg-amber-300':'bg-amber-900'} >
    <h1> 
   {evnetheadlara}
    </h1>
    <button onClick={()=>setcount(count+1)} > click</button>
    <button onClick={themeheadrla}  >  theme</button>
    </div>
  )
}

export default Momes
