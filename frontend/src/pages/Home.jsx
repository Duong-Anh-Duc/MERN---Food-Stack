import React, { useState } from 'react'
import Categories from '../components/Categories'
import Chefs from '../components/Chefs'
import FindUs from '../components/FindUs'
import Hero from '../components/Hero'
import ProductDisplay from '../components/ProductDisplay'
import Steps from '../components/Steps'
const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <>
    <Hero />
    <Steps />
    <Categories category = {category} setCategory={setCategory}/>
    <ProductDisplay category = {category}/>
    <FindUs />
    <Chefs />
    </>
  )
}

export default Home