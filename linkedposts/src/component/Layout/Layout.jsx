import React,{useContext} from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import { authContext } from '../../context/AuthContext'

export default function Layout() {
  return (
    <div>
    <Navbar/>

      

      <div className="container mx-auto p-5 max-w-5xl rounded-2xl">
<Outlet/>
      </div>
      <footer>footer</footer>
    </div>
  )
}
