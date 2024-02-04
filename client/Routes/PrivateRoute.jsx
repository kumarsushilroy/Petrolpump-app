import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useContextMethod } from '../src/Components/AuthContext';

const PrivateRoute = () => {

    const [userauth, setuserauth] = useContextMethod();

    const [okay, setokay] = useState();

    useEffect(()=>{
       const verifyPrivate = async()=>{
         let fetchVerify = await fetch('http://localhost:4000/private/route',{
            method:'get',
            headers:{
                "Content-Type":"application/json",
                authorization: `Bearer ${userauth?.token}`
            }
         });
         fetchVerify = await fetchVerify.json();
         if(fetchVerify.msg == "ok"){
            setokay(true)
         }else{
            setokay(false)
         }
       }
       if(userauth?.token) verifyPrivate();
    },[])

  return (
    <div>
        {setokay?<Outlet/>:<p>loading....</p>}
    </div>
  )
}

export default PrivateRoute