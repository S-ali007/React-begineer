import React from 'react'
import Button from './Button'
import {NavLink, Link } from 'react-router-dom'

function Output({name,email,removeItem,index,age,firstName,lastName,dob,id}) {

  return (
    <>

    <div className='flex justify-between items-center w-[max-full] border-gray-300 border-2 p-1 gap-6 text-white font-bold bg-gray-500'>
    <NavLink to={`/home/${id}`}>
<div className='flex gap-[90px]'>
          <h4 className="pt-2" >{name}</h4>
          <h4 className="pt-2" >{firstName}</h4>
          <h4 className="pt-2" >{lastName}</h4>
          <h4 className="pt-2">{age}</h4>
          <h4 className="pt-2">{dob}</h4>
          <h4 className="pt-2" >{email}</h4>
         </div>
       
    </NavLink> 



    <Button title={"Remove"} className='bg-red-300 flex'  data={()=>{
            return removeItem(index)
          }} ></Button></div>
  </>)
}

export default Output