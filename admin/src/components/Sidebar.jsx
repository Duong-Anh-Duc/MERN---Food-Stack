import React from 'react'
import { BsCardChecklist, BsCardList, BsPlusSquare } from "react-icons/bs"
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
   <div className='max-sm:flexCenter max-xs:pb-3 rounded-xl
   bg-white pb-3 mb-3 sm:w-1/5 sm:min-h-screen pl-6 log:pl-12
   sm:pr-3 sm:mr-3'>
    <div className='flex sm:flex-col gap-5 pt-4 sm:pt-10'>
      <NavLink to ={'/'} className={({isActive}) => isActive ? "active-link" : 
      "flexStart gap-x-2 p-5 medium-15 cursor-pointer max-w-60 h-10 rounded-xl"}>
        <BsPlusSquare />
        <div className='hidden lg:flex'>Add Items</div>
      </NavLink>
      <NavLink to ={'/list'} className={({isActive}) => isActive ? "active-link" : 
      "flexStart gap-x-2 p-5 medium-15 cursor-pointer max-w-60 h-10 rounded-xl"}>
        <BsCardList />
        <div className='hidden lg:flex'>List Items</div>
      </NavLink>
      <NavLink to ={'/orders'} className={({isActive}) => isActive ? "active-link" : 
      "flexStart gap-x-2 p-5 medium-15 cursor-pointer max-w-60 h-10 rounded-xl"}>
        <BsCardChecklist />
        <div className='hidden lg:flex'>Orders</div>
      </NavLink>
    </div>
   </div>
  )
}

export default Sidebar