
import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import { authContext } from "../../context/AuthContext"

let schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export default function Login() {

  const { setToken } = useContext(authContext)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
  })

  async function onSubmit(values) {
    try {
      setLoading(true)

      const response = await axios.post(
        "https://route-posts.routemisr.com/users/signin",
        values
      )

      setToken(response.data.data.token)
      localStorage.setItem("token", response.data.data.token)

      navigate("/")

    } catch (error) {
      console.log(error.response?.data)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#f3f6fb]">
      <div className="grid grid-cols-1 lg:grid-cols-2">

       
        {/* LEFT BLUE PANEL */}
          <div className="relative bg-gradient-to-br from-[#0b4fe3] via-[#0b4fe3] to-[#0a3cc0] text-white p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/15 flex items-center justify-center font-bold">
                S
              </div>
              <span className="font-semibold text-lg">SocialHub</span>
            </div>

            <div className="mt-10">
              <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Welcome Back
                <br />
                <span className="text-white/80">to SocialHub App</span>
              </h1>
              <p className="mt-3 text-white/80">
                Signin to connect people all over the world
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p className="text-sm font-semibold">Real-time Chat</p>
                <p className="text-xs text-white/75 mt-1">Instant messaging</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p className="text-sm font-semibold">Share Media</p>
                <p className="text-xs text-white/75 mt-1">Photos & videos</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p className="text-sm font-semibold">Smart Alerts</p>
                <p className="text-xs text-white/75 mt-1">Stay updated</p>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 p-4">
                <p className="text-sm font-semibold">Communities</p>
                <p className="text-xs text-white/75 mt-1">Find your tribe</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-8 text-white/90">
              <div>
                <p className="text-xl font-bold">2M+</p>
                <p className="text-xs text-white/70">Active Users</p>
              </div>
              <div>
                <p className="text-xl font-bold">10M+</p>
                <p className="text-xs text-white/70">Posts Shared</p>
              </div>
              <div>
                <p className="text-xl font-bold">50M+</p>
                <p className="text-xs text-white/70">Messages Sent</p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white/10 border border-white/10 p-6">
              <div className="flex gap-1 text-yellow-300 text-sm">★★★★★</div>
              <p className="mt-3 text-sm text-white/85 italic">
                “SocialHub has completely changed how I connect with friends.”
              </p>
            </div>
          </div>


        {/* RIGHT FORM */}
        <div className="flex items-center justify-center p-6">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold text-center">Login</h2>

            <p className="text-center text-sm mt-2">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold">
                Sign up
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full mt-2 rounded-xl border px-4 py-3 bg-gray-50"
                />
                {formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="w-full mt-2 rounded-xl border px-4 py-3 bg-gray-50"
                />
                {formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formState.errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
              >
                {loading ? "Loading..." : "Sign In →"}
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  )
}