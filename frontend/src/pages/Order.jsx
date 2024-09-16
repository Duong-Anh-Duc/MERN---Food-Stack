import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Order = () => {
  const {token, setToken, url, all_products, cartItems, setCartItems,addToCart,removeFromCart, getTotalCartItems, getTotalCartAmount}
  = useContext(ShopContext)
  const placeOrder = async (e) => {

  }
  return (
   <div className='max-padd-container py-28 xl:py-32'>
    <form onSubmit={placeOrder} className='flex flex-col
    xl:flex-row gap-20 xl:gap-28'>
      <div className = 'flex flex-1 flex-col gap-3 text-[95%]'>
        <h3 className='bold-28 mb-4'>Delivery Information</h3>
        <div>
          <input 
          type = "text" 
          name = 'firstName'
          placeholder='First Name'
          required
          className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none w-1/2'
          />
          <input 
          type="text" 
          name='lastName'
          placeholder='Last Name'
          required
          className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none w-1/2'
          />
        </div>
        <input 
        type='email' 
        name = 'email'
        placeholder='Email'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />
          <input 
        type='text' 
        name = 'phone'
        placeholder='Phone Number'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none '
        />
          <input 
        type='text' 
        name = 'street'
        placeholder='Street'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />
        <div className='flex gap-3'>
        <input 
        type='text' 
        name = 'city'
        placeholder='City'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />
         <input 
        type='text' 
        name = 'state'
        placeholder='State'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />
        </div>
        <div className='flex gap-3'>
        <input 
        type='text' 
        name = 'zipcode'
        placeholder='Zip Code'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />
         <input 
        type='text' 
        name = 'country'
        placeholder='Country'
        className = 'ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm outline-none'
        />

        </div>
      </div>
      <div className='flex flex-1 flex-col'>
      <div>
        <h4 className = 'bold-22'>Summary</h4>
      </div>
      </div>
    </form>
   </div>
  )
}

export default Order