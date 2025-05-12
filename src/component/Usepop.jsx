import React, { useEffect, useState } from 'react'
import photo from '../assets/google-photos-2022-ap-hero.jpg'
// import usere from '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import { LuMessageSquare } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { AiTwotoneLike } from "react-icons/ai";

import { AiFillLike } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import Comnet from './Comnet';
import { useDispatch } from 'react-redux';
import { Addcomment } from '../features/dataapi/dataapislice';


function Usepop({data}) {
// console.log(data)
const [like,setLike]=useState(true)
let [addlike,setaddlike]=useState(data.likes)
const [text,setText]=useState()
const dispatch=useDispatch()
// console.log(data.comments)


const likeadd=(e)=>{
if(like){
  setLike(false)
  setaddlike(addlike+1)
}
else{
  setLike(true)
  setaddlike(addlike-1)

}
  }

const addcommnet=(e,data)=>{
  e.preventDefault();
  dispatch(Addcomment({text:text,data}))
  setText('')
}



  return (
 <div className='   px-3 py-2'>


<div   className='  py-3' >

<h1 className='w-full  mt-2 flex flex-row pl-3 py-2'>
  <img src={data.dp} className='w-12 rounded-3xl' alt="" />
  <div className='flex flex-col px-3'>
  <span className='font-bold'> {data.name} </span>
  <span className='font-semibold'>{data.lastActive}</span>
  </div>
</h1>
<div className='   px-2 flex-col pb-10 pt-1'>
<img className="object-cover w-full bg-no-repeat bg-cover rounded-2xl" src={data.profileImage}   alt="" />


<h1 className=' border-b-1  flex items-center flex-row justify-center space-x-50 '>


<button className='flex  flex-row items-center space-x-5 py-2' onClick={likeadd} >

{

like ?


<AiTwotoneLike className='text-3xl' />:
<AiFillLike  className='text-3xl'/>





}


<span className='font-bold text-xl text-center'>{addlike}</span>
</button >

<div className='flex  flex-row items-center space-x-5'>

<label  htmlFor={`${data.id}`}  ><LuMessageSquare  className='text-3xl' /></label>
<span className='font-bold text-xl'>{ data?.comments.length}</span>

</div>
</h1>





{
  data?.comments?.map((item)=><Comnet key={item.id} comment={item}/>)

}







<form onSubmit={(e) => addcommnet(e, data)} className='  flex  space-x-2 -mb-10   items-center justify-center ' >

<input onChange={(e)=>setText(e.target.value)} value={text} type="text" id={data.id} name={data.id} className='px-3 w-90 h-10 border font-bold rounded-xl' /> <label htmlFor={data.id} className='text-3xl' > <button> <IoMdSend /></button></label>


</form>



</div>





</div>
 </div>
  )
}

export default Usepop
