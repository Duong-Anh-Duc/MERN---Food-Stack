import React from 'react'
import { categories } from "../assets/data"
const Categories = ({category, setCategory}) => {
    return (
       <section id = 'menu' className = "max-padd-container py-16">
         <div className='max-w-[622px] pb-20 mx-auto text-center'>
            <h3 className='h3 uppercase'>Flavors to Explore</h3>
           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe paritur mollitia impedit quod perferendis. Tempore quo
            dolore, unde cumque porro obcaecati?</p>
        </div>
        <div className='flexStart gap-10 flex-wrap'>
            {categories.map((item) => (
                <div onClick={() => setCategory((prev) => (
                    prev == item.name ? "All" : item.name
                ))}
                

                id = {item.name} key={item.name} className={`${category === item.name ? 
                "ring-1 ring-slate-900/5" : ""} flexCenter 
                flex-col bg-white rounded-2xl cursor-pointer`}>
                <div className='p-8 rounded-2xl'>
                    <img src = {item.image} alt = "categoryImg" height={122} width={122} 
                    className='object-contain aspect-square' />
                </div>  
                <h4 className='pb-4 medium-14'>{item.name}</h4>    
                </div>          
            ))
            }
        </div>
       </section>
    )
}

export default Categories