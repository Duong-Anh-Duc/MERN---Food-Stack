import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaXmark } from 'react-icons/fa6'
import { toast } from "react-toastify"
import { ShopContext } from '../context/ShopContext'

const LoginPopup = ({setShowLogin}) => {
    const { url, token, setToken } = useContext(ShopContext)
    const [state, setState] = useState('Login')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    useEffect(() => {
    }, [data])

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url
        if (state === "Login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        try {
            const response = await axios.post(newUrl, data)

            if (response.data.success) {
                setToken(response.data.token)
                localStorage.setItem("token", response.data.token)
                setShowLogin(false)
                toast.success(response.data.message || "Successful!")
            } else {
                toast.error(response.data.message || "Failed!")
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || "Something went wrong")
            } else {
                toast.error("An unexpected error occurred")
            }
        }
    }

    return (
        <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
            <form onSubmit={onLogin} className='bg-white w-[366px] p-7 rounded-xl shadow-md'>
                <div className='flex justify-between items-baseline'>
                    <h4 className='bold-28'>{state}</h4>
                    <FaXmark onClick={() => setShowLogin(false)} className='medium-20 text-slate-900/70 cursor-pointer' />
                </div>
                <div className='flex flex-col gap-4 my-6'>
                    {state === "Sign Up" && (
                        <input
                            name='name'
                            onChange={onChangeHandler}
                            value={data.name}
                            type='text'
                            placeholder='Name'
                            required
                            className='bg-primary border p2 pl-4 rounded-md outline-none'
                        />
                    )}
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type='email'
                        placeholder='Email'
                        required
                        className='bg-primary border p2 pl-4 rounded-md outline-none'
                    />
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type='password'
                        placeholder='Password'
                        required
                        className='bg-primary border p2 pl-4 rounded-md outline-none'
                    />
                </div>
                <button type='submit' className='btn-secondary rounded-md w-full'>
                    {state === "Sign Up" ? "Create account" : "Login"}
                </button>
                <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
                    <input type='checkbox' required checked/>
                    <p>By continuing you agree to our Terms of Service and Privacy Policy</p>
                </div>
                {state === "Sign Up" ? (
                    <p>Already have an account? <span className="text-secondary cursor-pointer" onClick={() => setState("Login")}> Login</span></p>
                ) : (
                    <p>Don't have an account? <span className="text-secondary cursor-pointer" onClick={() => setState("Sign Up")}> Sign Up</span></p>
                )}
            </form>
        </div>
    )
}

export default LoginPopup
