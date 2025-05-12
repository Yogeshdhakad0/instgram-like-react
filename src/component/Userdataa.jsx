import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Fechingdata } from '../features/dataapi/dataapislice'
import Usepop from './Usepop'
// import Pop from './op'

const Userdataa = () => {
const {data,isLoading,isError,message}=useSelector(state=>state.data)
console.log(data)

const dispatch=useDispatch()

useEffect(()=>{
dispatch(Fechingdata())
},[])

  return (


        
   
            <div  className='   flex items-center justify-between flex-col px-120 py-1  overflow-auto bg-fuchsia-100 '>
<div style={{ boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px' }} className='  rounded-2xl  bg-[rgb(255,140,183)]  sm:h-175  overflow-auto'>


{
    data?.map((item)=><Usepop key={item.id} data={item}   />
        
)
   }

</div>
    </div>
        
  
    



  )
}

export default Userdataa
