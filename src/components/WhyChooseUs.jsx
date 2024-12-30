import React from 'react'
import courierlady from '../assets/images/courier lady.png'
import bolt from '../assets/images/bolt.png'
import cost from '../assets/images/payments.png'
import secure from '../assets/images/secure.png'

const WhyChooseUs = () => {
  return (
    <div className='mx-20'>
      <div className='text-[32px] font-bold flex justify-center pb-10'>
        <h2>Why Choose Us</h2>
      </div>
      <div className='flex gap-10 justify-center'>
        <div>
            <img src={courierlady} width={400} />
        </div>
        <div>
            <div className='flex gap-4'>
                <div className='w-30 h-30'>
                <img src={bolt} />
                </div>
                
                <div className='w-[485px] h-[150px]'>
                    <h1 className='text-[32px] font-bold'>Right on Time</h1>
                    <p className='text-[16px]'>
                        Felis imperdiet proin fermentum leo vel orci porta non 
                        pulvinar. Amet aliquam id diam maecenas ultricies.
                        Eu turpis egestas pretium aenean pharetra magna ac 
                        placerat.
                    </p>
                </div>
                
            </div>

            <div className='flex gap-4'>
                <div className='w-30 h-30'>
                    <img src={cost} />
                </div>
                
                <div className='w-[485px] h-[150px]'>
                    <h1 className='text-[32px] font-bold'>Cost Saving</h1>
                    <p>
                        Felis imperdiet proin fermentum leo vel orci porta non 
                        pulvinar. Amet aliquam id diam maecenas ultricies.
                        Eu turpis egestas pretium aenean pharetra magna ac 
                        placerat.
                    </p>
                </div>
                
            </div>

            <div className='flex gap-4'>
                <div className='w-3- h-30'>
                    <img src={secure} />
                </div>
                
                <div className='w-[485px] h-[150px]'>
                    <h1 className='text-[32px] font-bold'>Right on Time</h1>
                    <p>
                        Felis imperdiet proin fermentum leo vel orci porta non 
                        pulvinar. Amet aliquam id diam maecenas ultricies.
                        Eu turpis egestas pretium aenean pharetra magna ac 
                        placerat.
                    </p>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
