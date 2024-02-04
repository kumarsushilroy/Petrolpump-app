

import {createContext, useContext, useEffect, useState} from 'react';


 
const Auth = createContext();

export const Authcontexts = ({children})=>{

    const [userauth, setuserauth] = useState({
      user:'null', 
      token:''
    })

    useEffect(()=>{
      const userData = localStorage.getItem('auth');
      const token = localStorage.getItem('token');
      
      if(userData){
        const parsedData = JSON.parse(userData);
        
        setuserauth({...userauth, user:parsedData, token:token});
        // console.log(token)
      }
    },[])
    // console.log("this",userauth?.token)
    // passing token default.....................

    //  axios.defaults.headers.common["Authorization"] = `Bearer ${userauth?.token}`;
  
    // axios.defaults.headers.common['Authorization'] = token?.token
    
  return (
    <Auth.Provider value={[userauth, setuserauth]}> 
        {children}
    </Auth.Provider>
  )
};

  export const useContextMethod = ()=>{
    return useContext(Auth)
  } 