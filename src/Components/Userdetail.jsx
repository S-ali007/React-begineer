import React from 'react'
import Button from './Button'
import {NavLink, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'




function Userdetail() {

  
  const [data, setData] = useState({});

      const {userId}=useParams();
      useEffect(() => {
        // window.alert("useEffect called");
        async function getData() {
          const get = await fetch(
            `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
          );
          const res = await get.json();
          setData(res[0]);
          console.log(res);
        }
        getData();
      }, []);

  return (
    <div>
       <div className=" p-6 w-[max-full] border-gray-300 border-2  text-white font-bold bg-gray-500 ">
        <h1 className='text-white'>User-ID  : {data.id} </h1>
         <img src={data.imageUrl} />    
       <h1 className='text-white'>First-Name  : {data.firstName} </h1>
        <h1 className='text-white'>Last-Name  : {data.lastName} </h1>
        <h1 className='text-white'>email  : {data.email} </h1>
        <h1 className='text-white'>contactNumber  : {data.contactNumber} </h1>
        <h1 className='text-white'>age  : { data.age} </h1>
        <h1 className='text-white'>dob  : {data.dob} </h1>
        <h1 className='text-white'>salary  : {data.salary} </h1>
        <h1 className='text-white'>address  : {data.address} </h1>

        </div>
    </div>
  )
}


export default Userdetail
