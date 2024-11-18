import React from 'react'
import Delivery from '../assets/images/Delivery-pic.png'
import logo1 from '../assets/images/Logo1.png'
import logo2 from '../assets/images/Logo2.png'
import logo3 from '../assets/images/Logo3.png'
import logo4 from '../assets/images/Logo4.png'
import logo5 from '../assets/images/Logo5.png'
import logo6 from '../assets/images/Logo6.png'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[#f0E5DD]justify-center items-center m-5'>
        <div className='flex flex-col m-4 justify-center items-center md:flex-row'>
            <div className='mx-10'>
                <h1 className=' font-bold text-[32px] text-center w-[400px]  sm:text-[64px] sm:text-left sm:w-[600px]'>
                    We can move you everywhere.
                    <span className='text-[#A9592C]'>
                        Fast and Easily
                    </span>
                </h1>
                <p className='text-[20px] w-[500px]'>
                    Facilisis gravida neque convallis a cras semper auctor 
                    neque vitae.Massa ultricies mi quis hendrerit dolor magna. 
                    Vulputate eu scelerisque
                </p>

                <div className='mt-5'>
                    <Button variant="brown" size="md" className="">
                        Book now
                    </Button>
                </div>
            </div>
            
            <div>
                <img src={Delivery} width={600} />
            </div>
        </div>
        <div className='flex w-[#1400] h-[160px] bg-[#F4F4F4] justify-center items-center gap-16'>
            <img src={logo1} />
            <img src={logo2} />
            <img src={logo3} />
            <img src={logo4} />
            <img src={logo5} />
            <img src={logo6} />
        </div>
    </div>
  )
}

export default Hero
