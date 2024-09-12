import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import heroImg from "../assets/bg.png"
const Hero = () => {
    return (
        <section id = {'home'} className='max-padd-container flex xl:flex-row flex-col gap-5 gap-y-20 z-0 relative'>
            <div className= 'absolute xl:-top-1 xl:-right-[42%] -right-1/4 bg-hero bg-repeat-round -z-10 w-full xl:h-[772px] h-[590px] overflow-hidden' />
        <div className="flex-1 pt-48 max-w-[611px]">
            <h2 className='h1 capitalize tracking-[1px]'>
               Delicious Meals Delivered Right 
               <span className='xl:text-secondary'>to Your Doorstep</span>
            </h2>
            <p className= 'pt-4 pb-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe paritur mollitia impedit quod perferendis. Tempore quo
            dolore, unde cumque porro obcaecati?
            </p>
            <div className= 'inline-flex flex-col xs:flex-row xs:items-center gap-3'>
                <Link className='btn-secondary rounded-full !px-12'>Order Now</Link>
                <Link className='btn-outline rounded-full !px-12 flexCenter gap-x-3'>
                Explore Menu
                <FaArrowRightLong />
                </Link>
            </div>
        </div>
        {}
        <div className='xl:flex-1 flex justify-end items-end'>
            <div className='relative xl:w:full w-[90%] xl:h-full
            h-[590px] xl:pt-20 xl:pl-24 z-0'>
                <img src = {heroImg} alt = ""></img>
            </div>
        </div>
        </section>
    )
}

export default Hero