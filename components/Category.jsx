// import React from 'react';
// import { categories } from '../data/data.js';

// const Category = () => {
//     console.log(categories)
//   return (
//     <div className='max-w-[1640px] px-4 py-12'>
//         <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
//         Categories
//         <div className='grid grid-cols-2 md:grid-cols-3 py-6 gap-6'>
//             {categories.map((item, index) => (
//                 <div key={index} className='bg-gray-100 rounded-lg p-4 text-white cursor-pointer flex justify-between items-center'>
//                     <h2  className='font-bold absolute sm:text-xl'>{item.name}</h2>
//                     <img className='' src={item.image} alt={item.name} />
//                 </div>
//             ) )}
//         </div>
//     </div>
//   )
// }

// export default Category

import React from 'react';
// import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
// import { GiMushrooms, GiChickenOven } from 'react-icons/gi';

const Category = () => {
    return (
        <div className='grid grid-cols-2 min-h-[20r lg:grid-cols-4 gap-6 max-w-[1640px] px-4 py-12 mx-auto p-4'>
            {/* <div className='flex bg-gray-100 rounded-lg p-4 text-orange-600 items-center w-full justify-evenly'>
                <h1 className='font-bold'>Wings</h1>
                <GiChickenOven size={70} />
            </div>
            <div className='flex bg-gray-100 rounded-lg p-4 text-orange-600 items-center w-full justify-evenly'>
                <h1 className='font-bold'>Indian</h1>
                <GiMushrooms size={70} />
            </div>
            <div className='flex bg-gray-100 rounded-lg p-4 text-orange-600 items-center w-full justify-evenly'>
                <h1 className='font-bold'>Latest Pizza</h1>
                <FaPizzaSlice size={70} />
            </div>
            <div className='flex bg-gray-100 rounded-lg p-4 text-orange-600 items-center w-full justify-evenly'>
                <h1 className='font-bold'>Double Cheeseburger</h1>
                <FaHamburger size={70} />
            </div> */}
        </div>
    )
}

export default Category