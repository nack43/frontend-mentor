import Image from 'next/image'

import InfoCard from '../components/InforCard'

export default function Home() {
  return (
      <div className='h-screen w-screen bg-hero-desktop bg-no-repeat bg-blue-100 flex flex-col items-center justify-center'>

        <div>
          {/* Image */}
          <div className='relative w-full h-56 rounded-t-2xl overflow-hidden'>
            <Image src="/static/illustration-hero.svg" layout='fill' objectFit='cover'/>
          </div>

          {/* Bottom Content */}
          <div className='max-w-[327px] md:max-w-md bg-white p-8 rounded-b-2xl'>

            <div className='flex flex-col items-center'>
              {/* Title */}
              <h1 className='text-2xl mb-2 font-bold'>Order Summary</h1>

              {/* Description */}
              <p className='text-gray-500 text-center leading-6 m-4'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

              {/* Card */}
              <InfoCard/>

              {/* Button */}
              <button
                className='w-full py-4 m-6 bg-indigo-700 text-white rounded-xl shadow-xl '
              >Proceed to Payment</button>

              {/* Cancel Order */}
              <p className='text-center text-gray-500 cursor-pointer'>Cancel Order</p>
            </div>
          </div>
        </div>
      </div>
  )
}
