import React from 'react'
import { GoChecklist } from "react-icons/go"
import { GrFormCheckmark } from "react-icons/gr"
import { PiCookingPot } from "react-icons/pi"
import { TbTruckDelivery } from "react-icons/tb"
const Steps = () => {
    return (
       <section className= 'max-padd-container py-16 xl:py-28'>
        {/*title */ }
        <div className='max-w-[622px] pb-20 mx-auto text-center'>
            <h3 className='h3 uppercase'>How it works ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe paritur mollitia impedit quod perferendis. Tempore quo
            dolore, unde cumque porro obcaecati?
            </p>
        </div>
        <div className='flexCenter gap-5 flex-wrap'>
            <div className = 'flexCenter gap-4'>
                <div className='h-10 w-10 flexCenter bg-secondary rounded-full text-white'>
                    <GoChecklist className='text-2xl'/>
                </div>
                <hr className='bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full' />
            </div>

            <div className = 'flexCenter gap-4'>
                <div className='h-10 w-10 flexCenter bg-secondary rounded-full text-white'>
                    <PiCookingPot className='text-2xl'/>
                </div>
                <hr className='bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full' />
            </div>
            <div className = 'flexCenter gap-4'>
                <div className='h-10 w-10 flexCenter bg-secondary rounded-full text-white'>
                    <TbTruckDelivery className='text-2xl'/>
                </div>
                <hr className='bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full' />
            </div>
            <div className = 'flexCenter gap-4'>
                <div className='h-10 w-10 flexCenter bg-secondary rounded-full text-white'>
                    <GrFormCheckmark className='text-2xl'/>
                </div>
                <hr className='bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full' />
            </div>
        </div>
       </section>
    )
}

export default Steps