import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaBox } from 'react-icons/fa'
import { toast } from 'react-toastify'
const Orders = ({url}) => {
  const[orders, setOrder] = useState([])
  const fetchAllOrders = async() => {
    const response = await axios.get(url + "/api/order/list")
    if(response.data.success){
      setOrder(response.data.data)
      console.log(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }
useEffect(() => {
  fetchAllOrders()
}, [])
  return (
   <div>
    <h4 className='bold-24'>Orders Page</h4>
    <div className = 'overflow-auto mt-5'>
        <table className = 'w-full'>
          <thead>
            <tr className='border-b border-slate-900/20 text-gray-30 regular-14 xs:regular-16 text-start py-12'>
              <th className='p-1 text-left hidden sm:table-cell'>Package</th>
              <th className='p-1 text-left'>Order</th>
              <th className='p-1 text-left'>Items</th>
              <th className='p-1 text-left'>Price</th>
              <th className='p-1 text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className='border-b border-slate-900/20 text-gray-50 p-6 medium-14 text-left'>
                <td className ='p-1 hidden sm:table-cell'><FaBox className='text-2xl text-secondary' /></td>
                <td className = 'p-1'>
                  <div className = 'py-2'>
                  <p>{order.items.map((item, index) => {
                    if(index === order.items.length-1){
                      return item.name + " x " + item.quantity
                    }
                    else{
                      return item.name + " x " + item.quantity + ", "
                    }
                  })}</p>
                  </div>
                  <hr className = 'w-1/2'/>
                  <div>
                    <h5 className = 'medium-15'>
                      {order.address.firstName + " " + order.address.
                      lastName}
                    </h5>
                  </div>
                </td>
                <td className = 'p-1'>${order.amount}</td>
                <td className = 'p-1 text-center'>{order.items.length}</td>
                <td className = 'p-1'>
                  <p className = 'flexCenter gap-x-2'>
                    <span className='hidden lg:flex'>
                      &#x25cf;
                    </span>
                    <b>{order.Status}</b>
                  </p>
                </td>
                <td className='p-1'>
                  <button className='btn-white rounded-sm'>Track</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   </div>

  )
}

export default Orders