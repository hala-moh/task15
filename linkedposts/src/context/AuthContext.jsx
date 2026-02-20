import React, { createContext, useEffect, useState } from 'react'
export let authContext = createContext()
export default function AuthContext({children}) {
  const[token,setToken]=  useState(null)

useEffect(function(){


let tokenfromLocal = localStorage.getItem("token")
if( tokenfromLocal != null   ){

    setToken(tokenfromLocal)
}




},[])






  return <authContext.Provider value={{ token,setToken }}>

      {children}
    </authContext.Provider>
  
}
