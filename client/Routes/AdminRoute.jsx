
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useContextMethod } from '../src/Components/AuthContext';

const AdminRoute = () => {

    const [okay, setokay] = useState();
    const [userauth, setuserauth] = useContextMethod();

    useEffect(()=>{
        const adminVerify = async()=>{
            let verifyAdmin = await fetch('http://localhost:4000/admin/route',{
                method:'get',
                headers:{
                    "Content-Type": "application/json",
                    authorization: `Bearer ${userauth?.token}`
                }
            });
            verifyAdmin = await verifyAdmin.json();
            console.log(verifyAdmin.msg)
            if(verifyAdmin.msg=='ok'){
                setokay(true)
            }else{
                setokay(false)
            }

        }
        if(userauth?.token) adminVerify();
    },[])

  return (
    <div>
        {
            setokay?<Outlet/>:<p>loading for admin verification....</p>
        }
    </div>
  )
}

export default AdminRoute