import React from 'react'
import phone from '../assets/images/phone.png'
import whatsapp from '../assets/images/whatsapp.png'

const CustomerLine = () => {
  return (
    <div className='mx-20'>
      <div className='w-1400 h-180 bg-[#CFCFCF] flex justify-center'>
        <div>
            <h2 className='text-[32px] font-bold'>
            Our Customer service is available 24/7
            </h2>
            <h1 className='text-[44px] font-bold flex justify-center items-center gap-14'>
                <div className='flex w-[36px] h-[36px] gap-2'>
                <img src={whatsapp} />
                <img src={phone} />
                </div>
                
            +1-255-789489
            </h1>

        </div>
      </div>
    </div>
  )
}

export default CustomerLine
