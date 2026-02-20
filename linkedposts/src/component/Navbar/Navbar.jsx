import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  Button} from "@heroui/react";
import{Link, useNavigate} from "react-router-dom"
import { useContext } from 'react';
import { authContext } from '../../context/AuthContext';
export default function myNavbar() {
const {token,setToken} = useContext(authContext)
console.log(token);

let nav = useNavigate()
function handellogout (){
  localStorage.removeItem("token")
  setToken(null)
  nav("/login")
}

  return (
   <div>
    <Navbar>
      <NavbarBrand>
       
        <p className="font-bold text-inherit">Linked posts</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
{token? <>

   <NavbarItem>
          <Link color="foreground" to={"/"}>
        home
          </Link>

        </NavbarItem>


        <NavbarItem isActive>
          <Link aria-current="page" to = {"/profile"}>
         Profile
          </Link>
        </NavbarItem>

</>:null}

       
      
      </NavbarContent>
      <NavbarContent justify="end">
{token? 
 <button onClick={handellogout} className="hidden lg:flex">



      Logout
        </button>:     <>
        
              <NavbarItem className="hidden lg:flex">



          <Link to={"/login"}>Login</Link>
        </NavbarItem>




       
        
        
        
        
        
      
        </>}



        <NavbarItem>
          <Button as={Link} color="primary" to={"/signup"} variant="flat">
            Sign Up
          </Button>
        </NavbarItem>








  
      </NavbarContent>
    </Navbar>
   </div>
  )
}
