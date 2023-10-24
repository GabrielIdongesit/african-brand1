import React, {useState} from 'react';
import { AiOutlineClose, AiFillTag, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';
import {BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery } from 'react-icons/tb';
import {MdFavorite, MdHelp} from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import CARD from '../assets/logo.jpeg';

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] bg-white top-0 sticky z-50 mx-auto flex justify-between items-center p-4'>
        
        {/* Left side */}
        <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu  className='hover:bg-green-400 p-2 px-2 py-1 hover:text-white  hover:rounded-full' size={45} />
        </div>
        <img className='max-h-[100px] md:max-h-[50px] cursor-pointer w-full object-cover rounded-xl' src={CARD} alt="/" />
        {/* <h1 className='text-xl sm:text-3xl lg:text-4xl px-2'>
            Best <span className='font-bold'>Eats</span>
        </h1> */}

        {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='text-white cursor-pointer bg-orange-400  rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div> */}
        </div>

        {/* Search Input */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder="Search" />
        </div>
        {/* Cart button */}
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
            <p className='text-white cursor-pointer bg-green-400  rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
        </div>
        <button className='bg-green-600 text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2 animate-pulse'  /> Cart
        </button>

        {/* Mobile Menu */}
        {/* Overlay */}
        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

        {/* Side drawer menu */}
        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-green-100 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={40} className="absolute hover:bg-green-400 p-2 px-2 py-1 hover:text-white  hover:rounded-full right-4 top-4 cursor-pointer" />
            <img className='max-h-[100px] md:max-h-[50px] pl-2 cursor-pointer object-cover rounded-xl' src={CARD} alt="/" />
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><TbTruckDelivery size={25} className='mr-2' /> Orders</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><MdFavorite size={25} className='mr-2' /> Favorite</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><FaWallet size={25} className='mr-2' /> Wallet</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><MdHelp size={25} className='mr-2' /> Help</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><AiFillTag size={25} className='mr-2' /> Promotions</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><BsFillSaveFill size={25} className='mr-2' /> Best ones</li>
                    <li className='text-xl hover:bg-green-600 hover:text-white border hover:scale-105 duration-300 rounded-xl p-2 my-2 py-2 cursor-pointer hover:border-black  border-green-300 flex'><FaUserFriends size={25} className='mr-2' /> Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar