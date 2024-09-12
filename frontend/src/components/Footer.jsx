import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer id ='contact' className = 'text-white bg-[#222] max-padd-container py-12 rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div className='flex flex-col items-center md:items-start'>
                    <Link to ={'/'} className='bold-24 mb-4'>
                    <h3>Food<span className='text-secondary'>Stack</span></h3>
                    </Link>
                <p className='text-center md:text-left'>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Modi pariatur alias possimus a deserunt voluptatem ipsa quam
                 impedit? Modi, accusamus deleniti!</p>   
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h4 className='bold-20 mb-4'>Quick Links</h4>
                <ul className = 'space-y-2 regular-15 text-gray-30'>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Categories
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Menu
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h4 className='bold-20 mb-4'>Quick Links</h4>
                <ul className = 'space-y-2 regular-15 text-gray-30'>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Terms of Service
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Shipping Policy
                        </Link>
                    </li>
                    <li>
                        <Link to ={'/'} className='hover:text-secondary'>
                        Return Policy
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col items-center md:items-start'>
                <h4 className='bold-20 mb-4'>Contact Us</h4>
                <p>
                    Email : 
                    <a href="/" className='hover:text-secondary'>ducytcg123456@gmail.com</a>
                </p>
                <p>
                    Phone :
                    <a href = "/" className='hover:text-secondary'>0338617203</a>
                </p>
                <p>
                    Address : Bac Giang
                </p>
            </div>
            </div>
            <div className = "flex flex-col items-center mt-8">
               <hr className='h-[1px] w-full max-w-screen-md my-4 border-white'/>
            <p className='text-center text-sm'>&copy; {new Date().getFullYear} FoodStack | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer