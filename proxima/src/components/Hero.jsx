import React from 'react'
import Delivery from '../assets/images/Delivery-pic.png'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-[#f0E5DD]justify-center items-center mt-5'>
        <div className='flex justify-center items-center'>
            <div>
                <h1 className='font-bold text-[64px] text-left w-[600px]'>
                    We can move you everywhere.
                    <span className='text-[#A9592C]'>
                        Fast and Easily
                    </span>
                </h1>
                <p className='tex-[20px] w-[500px]'>
                    Facilisis gravida neque convallis a cras semper auctor 
                    neque vitae.Massa ultricies mi quis hendrerit dolor magna. 
                    Vulputate eu scelerisque
                </p>

                <Button variant="brown" size="md">
                    Book now
                </Button>
            </div>
            
            <div>
                <img src={Delivery} width={700} />
            </div>
        </div>
    </div>
  )
}

export default Hero
