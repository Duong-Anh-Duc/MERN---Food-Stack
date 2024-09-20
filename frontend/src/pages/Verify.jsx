import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const success = searchParams.get("success")
  const orderId = searchParams.get("orderId")
  const navigate = useNavigate()
  console.log(success, orderId)
  const {url} = useContext(ShopContext)
  const verifyPayment = async() => {
    const response = await axios.post(url + "/api/order/verify", {success, orderId})
    if(response.data.success){
      navigate("/myorders")
    }
    else{
      navigate("/")
    }
  }
  useEffect(() => {
    verifyPayment()
  }, [])
  return (
    <div>
      <div className = 'min-h-[60vh] grid'>
       <div className = 'h-24 w-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'></div>
      </div>
    </div>
  )
}

export default Verify 