import React, { createContext } from 'react'

export const ShopContext = createContext(null)

function ShopContextProvider(props) {
    const contextValue = {}
  return (
    <div>ShopContext</div>
  )
}

export default ShopContextProvider