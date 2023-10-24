import React, {useState} from 'react';
import { data } from '../data/data.js';

const Clothes = () => {
    // console.log(data)

    const [clothes, setClothes] = useState(data);

    // Fill Type burgers/pixxa/ etc

    const filterType =(category) => {
        setClothes(
            data.filter((item) => {
                return item.category === category
            })
        );
    };

    // Filter by price

    const filterPrice = (price) => {
        setClothes(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-green-600 font-bold text-4xl text-center'>African's Top Rated Attires Menu</h1>
        {/* filter Row */}

        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
            <p className='font-bold text-gray-700'>Country Names</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setClothes(data)} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>All</button>
                <button onClick={() => filterType('Nigeria')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Nigeria</button>
                <button onClick={() => filterType('Benin')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Benin</button>
                <button onClick={() => filterType('Kenya')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Kenya</button>
                <button onClick={() => filterType('Ghana')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Ghana</button>
                <button onClick={() => filterType('Egypt')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Egypt</button>
                <button onClick={() => filterType('Guinea')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Guinea</button>
                {/* <button onClick={() => filterType('Liberia')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Liberia</button> */}
                {/* <button onClick={() => filterType('Gambia')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Gambia</button>
                <button onClick={() => filterType('Chad')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Chad</button>
                <button onClick={() => filterType('Ethiopia')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Ethiopia</button>

                <button onClick={() => filterType('Congo')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Congo</button>
                <button onClick={() => filterType('Libya')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Libya</button>
                <button onClick={() => filterType('Malawi')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Malawi</button>
                <button onClick={() => filterType('Morocco')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Morocco</button>
                <button onClick={() => filterType('Niger')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Niger</button>

                <button onClick={() => filterType('Mozambique')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Mozambique</button>
                <button onClick={() => filterType('Rwanda')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Rwanda</button>
                <button onClick={() => filterType('Senegal')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Senegal</button>
                <button onClick={() => filterType('Sierra Leone')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Sierra Leone</button>
                <button onClick={() => filterType('Togo')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Togo</button>

                <button onClick={() => filterType('Zambia')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Zambia</button>
                <button onClick={() => filterType('Zimbabwe')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Zimbabwe</button>
                <button onClick={() => filterType('Uganda')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Uganda</button>
                <button onClick={() => filterType('Tanzania')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Tanzania</button>
                <button onClick={() => filterType('South Sudan')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>South Sudan</button>

                <button onClick={() => filterType('South Africa')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>South Africa</button>
                <button onClick={() => filterType('Mali')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Mali</button>
                <button onClick={() => filterType('Guinea')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Guinea</button>
                <button onClick={() => filterType('Guinea-Bissau')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Guinea-Bissau</button>
                <button onClick={() => filterType('Gabon')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Gabon</button>

                <button onClick={() => filterType("Cote d'Ivoire")} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Cote d'Ivoire</button>
                <button onClick={() => filterType('Central African Republic')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Central African Republic</button>
                <button onClick={() => filterType('Burkina Faso')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Burkina Faso</button>
                <button onClick={() => filterType('Algeria')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>Algeria</button> */}

            </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('₦15,000')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>₦15,000</button>
                    <button onClick={() => filterPrice('₦4,500')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>₦4,500</button>
                    <button onClick={() => filterPrice('₦16,500')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>₦16,500</button>
                    <button onClick={() => filterPrice('₦18,500')} className='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>₦18,500</button>
                </div>
            </div>
        </div>
        {/* Display food */}
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-6 pt-4'>
            {clothes.map((item, index) => (
                <div className='border shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-300' key={index}>
                    <img className='w-full h-[400px] object-cover cursor-pointer p-0 rounded-t-lg' src={item.image} alt={item.name} size={70} />

                    <div className='flex justify-between px-2 py-1'>
                        <p className='font-bold text-[12px]'>{item.name}</p>
                        <p>
                            <span className='bg-green-500 cursor-pointer text-[10px] text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                        {/* <p>
                            <span className='bg-green-500 cursor-pointer text-center text-white p-1 rounded-full'>{item.description}</span>
                        </p> */}
                    {/* <div ClassName='border-green-600 text-green-600 hover:bg-green-600 hover:text-white m-1'>ADD TO CART</div> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clothes