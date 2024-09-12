import React, { useContext } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Item = ({product}) => {
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
    return (
        <div className='ring-1 ring-slate-900/5 rounded-xl'>
            <Link to = {""} className = 'flexCenter p-4 ring-1 ring-slate-200/20 bg-white rounded-xl'>
            <img src={product.image} alt ="productImg" 
            height={222} width={222}
            className='object-contain aspect-square rounded-xl'
            />
            </Link>
           <div className='p-3 bg-primary'>
            <h4 className='bold-16 line-clamp-1 mb-1'>{product.name}</h4>
            <p className='line-clamp-2'>{product.description}</p>
           </div>
           <div className='flexBetween bg-white rounded-xl p-3 py-4'>
            <div class = 'flex flex-col gap-2 medium-14'>
                <h5>Savings</h5>
                <div className='bg-primary flexBetween gap-2 rounded-sm'>
                    <FaMinus onClick={()=>removeFromCart(product._id)} className='bg-primary h-5 w-5 p-1 cursor-pointer rounded-sm' />
                    <p>{cartItems[product._id] >= 0 ? cartItems[product._id] : 0}</p>
                    <FaPlus onClick={()=>addToCart(product._id)} className='bg-secondary h-5 w-5 p-1 cursor-pointer rounded-sm'/>
                </div>
            </div>
            <hr className = 'w-[1px] h-12 bg-slate-900/20'/>
            <div className = "flexCenter flex-col gap-2 bold-14">
                <h5 className = "medium-14">Preparation</h5> 
                <p>5min</p>
            </div>
            <hr className = 'w-[1px] h-12 bg-slate-900/20'/>
            <div className = "flexCenter flex-col gap-2 bold-14">
                <h5 className = "medium-14">Cook</h5>
                <p>20min</p>
            </div>
            <hr className = 'w-[1px] h-12 bg-slate-900/20'/>
            <div className = "flexCenter flex-col gap-2 bold-14">
                <h5 className = "medium-14">Price</h5>
                <p>{product.price}</p>
            </div>
           </div>
        </div>
    )
}

export default Item