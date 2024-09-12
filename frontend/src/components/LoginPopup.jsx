import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

const LoginPopup = ({setShowLogin}) => {
    const [state, setState] = useState('Sign Up')
    return (
       <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
        <form className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
            <div className='flex justify-between items-baseline'>
                <h4 className='bold-28'>{state}</h4>
                <FaXmark onClick = {() => setShowLogin(false)} className='medium-20 text-slate-900/70 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-4 my-6'>{state === "Sign Up" && (
                <input
                type = 'text'
                placeholder='Name'
                required
                className='bg-primary border p2 pl-4 
                rounded-md outline-none'
                />
            )}
            <input
                type = 'email'
                placeholder='Email'
                required
                className='bg-primary border p2 pl-4 
                rounded-md outline-none'
                />
                <input
                type = 'password'
                placeholder='Password'
                required
                className='bg-primary border p2 pl-4 
                rounded-md outline-none'
                />
            </div>
            <button type = 'submit' className='btn-secondary rounded-md w-full'>{state === "Sign Up" ? "Create account" : "Login"}</button>
            <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
            <input type = "checkbox" required/>
            <p>By continuing you agree to our Terms of Service and Privacy Policy</p>
            </div>
            {state === "Sign Up" ? (
                <p>Already have an account?<span className ="text-secondary cursor-pointer"onClick={() => setState("Login")}> Login</span></p>
            ): (
                <p>Don't have an account?<span className = "text-secondary cursor-pointer"onClick={() => setState("Sign Up")}> Sign Up</span></p>
            )}
        </form>
       </div>
    )
}

export default LoginPopup
