import React, { createContext, useState } from 'react'
// import CounterContext from './CounterContext';
export let counterContext = createContext()
export default function CounterContextprovider({children}) {
 
    const [counter,setcounter] = useState(10)

    function inc(){
        setcounter(counter+1)
    }
  return (
    <>


    <counterContext.Provider    value={{number:counter,inc}}>
 {children} 
 
        
      
    </counterContext.Provider>
    </>
  )
}
