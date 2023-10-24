import React from 'react'
import CARD from '../assets/onecard.jpg';
import CARD1 from '../assets/twocard.jpg';
import CARD2 from '../assets/threecard.jpg';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Alway at your service</p>
                <p className='px-2'>Through 24/7</p>
                <button className='border-white bg-green-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={CARD} alt="/" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Attires</p>
                <p className='px-2'>Added  Order</p>
                <button className='border-white bg-green-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={CARD1} alt="/" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>At your service</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-green-500 text-white mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={CARD2} alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards