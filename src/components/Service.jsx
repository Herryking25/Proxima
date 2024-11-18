import React from 'react'
import apartment from '../assets/images/apartment.png'
import bikeicon from '../assets/images/bikeicon.png'
import local_shipping from '../assets/images/local_shipping.png'
import caricon from '../assets/images/caricon.png'


const Service = () => {
  return (
    <div className=' m-10'>
      <div className='flex justify-center items-center'>
        <h2 className='font-bold text-[32px]'>Our Services</h2>
      </div>
      <div className='flex justify-center items-center gap-8'>

      <div className='w-[307px] max-h-min flex flex-col border items-center mt-4 p-5'>
        <div>
            <img src={apartment} width={27} />
        </div>
        <div>
            <h2 className='font-bold text-[32px] text-center'>
                Relocation &
                Logistics
            </h2>
            <p className='text-[20px] mt-2'>Nec nam aliquam sem et 
            tortor. Nec sagittis aliquam
             malesuada bibendum 
            arcu vitae. Nunc aliquet 
            bibendum enim facilisis 
            gravida neque convallis. 
            Nisi est sit amet facilisis 
            magna.</p>
        </div>
      </div>

      <div className='w-[307px] max-h-min flex flex-col border items-center p-5'>
        <div>
            <img src={bikeicon} width={35} />
        </div>
        <div>
            <h2 className='font-bold text-[32px] text-center'>
                Courier &
                Delivery
            </h2>
            <p className='text-[20px] mt-2'>Nec nam aliquam sem et 
            tortor. Nec sagittis aliquam
             malesuada bibendum 
            arcu vitae. Nunc aliquet 
            bibendum enim facilisis 
            gravida neque convallis. 
            Nisi est sit amet facilisis 
            magna.</p>
        </div>
      </div>

      <div className='w-[307px] max-h-min flex flex-col border items-center p-5'>
        <div>
            <img src={local_shipping} width={35} />
        </div>
        <div>
            <h2 className='font-bold text-[32px] text-center'>
                Transportation 
                services
            </h2>
            <p className='text-[20px] mt-2'>Nec nam aliquam sem et 
            tortor. Nec sagittis aliquam
             malesuada bibendum 
            arcu vitae. Nunc aliquet 
            bibendum enim facilisis 
            gravida neque convallis. 
            Nisi est sit amet facilisis 
            magna.</p>
        </div>
      </div>

      <div className='w-[307px] max-h-min flex flex-col border items-center p-5'>
        <div>
            <img src={caricon} width={35} />
        </div>
        <div>
            <h2 className='font-bold text-[32px] text-center'>
                Car rental,sales
                & pick-up
            </h2>
            <p className='text-[20px] mt-2'>Nec nam aliquam sem et 
            tortor. Nec sagittis aliquam
             malesuada bibendum 
            arcu vitae. Nunc aliquet 
            bibendum enim facilisis 
            gravida neque convallis. 
            Nisi est sit amet facilisis 
            magna.</p>
        </div>
      </div>

      
      </div>
      
    </div>
  )
}

export default Service
