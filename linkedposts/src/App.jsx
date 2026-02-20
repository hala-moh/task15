

import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./component/Layout/Layout"
import Login from "./component/Login/Login"
import Signup from "./component/Signup/Signup"
import Home from "./component/Home/Home"
import Profile from "./component/Profile/Profile"
import PostDetails from "./component/PostDetails/PostDetails"

import CounterContextprovider from "./context/CounterContext"
import { HeroUIProvider } from "@heroui/react"
import AuthContext from "./context/AuthContext"
import Authroute from "./component/Authroute/Authroute"
import Hamada from "./component/Hamada/Hamada"
import {QueryClientProvider,  QueryClient } from"@tanstack/react-query"
export default function App() {
let client= new QueryClient()
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [

       
        {
          path: "login",
          element: (
            <Authroute>
              <Login />
            </Authroute>
          )
        },
        {
          path: "signup",
          element: (
            <Authroute>
              <Signup />
            </Authroute>
          )
        },

      
        {
          path: "/",
          element: (
            <Hamada>
              <Home />
            </Hamada>
          )
        },
        {
          path: "profile",
          element: (
            <Hamada>
              <Profile />
            </Hamada>
          )
        },

     
        {
          path: "post/:id",
          element: (
            <Hamada>
              <PostDetails />
            </Hamada>
          )
        }

      ]
    }
  ])

  return (
    <QueryClientProvider client={client}>
    <HeroUIProvider>
      <AuthContext>
        <CounterContextprovider>
          <RouterProvider router={router} />
        </CounterContextprovider>
      </AuthContext>
    </HeroUIProvider>
    </QueryClientProvider>
  )
}