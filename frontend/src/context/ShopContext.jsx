import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const ShopContext = createContext()
function ShopContextProvider(props) {
      const url = "http://localhost:4000"
      const[token, setToken] = useState("")
    const[cartItems, setCartItems] = useState({})
    const [all_products, setAll_products] = useState([])
    const addToCart = (itemId) => {
      if(!cartItems[itemId]){
        setCartItems((prev) => ({...prev, [itemId]:1}))
      }
      else{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
      }
    }
    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}))
    }
    const getTotalCartItems = () => {
      let totalItems = 0
      for(const item in cartItems){
        totalItems += cartItems[item]
      }
      return totalItems
    }
    const getTotalCartAmount = () => {
      let TotalAmount = 0
      for(const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = all_products.find((product) => product._id === item)
          TotalAmount += itemInfo.price * cartItems[item]
        }
      }
      return TotalAmount
    }
    const fetchProductList = async () => {
      const response = await axios.get(url + "/api/product/list")

      setAll_products(response.data.data)
    }
    useEffect(() => {
      async function loadData() {
        await fetchProductList()
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"))
        }
      }
      loadData()
    }, [])


    const contextValue = {token, setToken, url, all_products, cartItems, setCartItems,addToCart,removeFromCart, getTotalCartItems, getTotalCartAmount}
  return (
    <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider