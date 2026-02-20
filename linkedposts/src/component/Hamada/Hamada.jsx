import React,{useContext} from 'react'
import { authContext } from './../../context/AuthContext';
import { h1 } from 'framer-motion/client';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Hamada({children}) {
 let {token}  =  useContext(authContext)

 let nav = useNavigate()



 if(!token){
    return <Navigate to={"/login"}/>
 }



  return  children
  
  
  
}

