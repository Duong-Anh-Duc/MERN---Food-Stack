import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const ShopContext = createContext()

function ShopContextProvider(props) {
  const url = "https://mern-food-stack.onrender.com"
  const [token, setToken] = useState("")
  const [cartItems, setCartItems] = useState({})
  const [all_products, setAll_products] = useState([])

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    if (token) {
      await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } })
    }
  }

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] > 1) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    } else {
      const newCart = { ...cartItems }
      delete newCart[itemId]
      setCartItems(newCart)
    }
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } })
    }
  }

  const getTotalCartItems = () => {
    let totalItems = 0
    for (const item in cartItems) {
      totalItems += cartItems[item]
    }
    return totalItems
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product._id === item)
        totalAmount += itemInfo.price * cartItems[item]
      }
    }
    return totalAmount
  }

  const fetchProductList = async () => {
    try {
      const response = await axios.get(url + "/api/product/list")
      setAll_products(response.data.data)
    } catch (error) {
      console.error("Error fetching product list", error)
    }
  }

  const loadCartData = async (token) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
      setCartItems(response.data.cartData)
    } catch (error) {
      console.error("Error loading cart data", error)
    }
  }

  useEffect(() => {
    async function loadData() {
      await fetchProductList()
      const savedToken = localStorage.getItem("token")
      if (savedToken) {
        setToken(savedToken)
        await loadCartData(savedToken)
      }
    }
    loadData()
  }, [])

  const contextValue = {
    token, setToken, url, all_products, cartItems, setCartItems,
    addToCart, removeFromCart, getTotalCartItems, getTotalCartAmount
  }

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
