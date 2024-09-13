import React, { createContext, useState } from 'react'
import { all_products } from '../assets/data'
export const ShopContext = createContext()

function ShopContextProvider(props) {
      const url = "http://localhost:4000"
      const[token, setToken] = useState("")
    const[cartItems, setCartItems] = useState({})
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


    const contextValue = {token, setToken, url, all_products, cartItems, setCartItems,addToCart,removeFromCart, getTotalCartItems, getTotalCartAmount}
  return (
    <ShopContext.Provider value = {contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider